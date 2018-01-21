const Service = require('egg').Service;
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')

class CrawlerService extends Service {
    constructor(ctx){
        super(ctx);
    }
    //模拟http请求抓取数据
    async getFerryArray () {
        const ctx = this.ctx;
        const result = await ctx.curl('http://www.haianport.com/Cursailok.php');
        let $ = cheerio.load(result.data);
        let array = [];
        const head = ['ferry_id', 'ferry_name', 'ferry_startTime', 'ferry_state',
        'ferry_salabilityPassenger', 'ferry_salabilityCar', 'ferry_salabilityCoach'];
        //海安新港
        function toArray(ele, startPort){
            $(ele).find('table tr').each(function (i) {
                let json = {};
                $(this).find('td').each(function (i) {
                    json[head[i]] = $(this).text();
                    json['ferry_arriveTime'] = '01-18 21:00';
                    json['ferry_startPort'] = startPort;
                    json['ferry_arrivePort'] = '海口秀英港';
                    json['ferry_price'] = '41.5';
                })
                if(i > 0) {
                    //不取表头
                    array.push(json);
                }
            });
        }
        toArray('#2integral_div1', '海安新港');
        toArray('#2integral_div2', '海安港');
        //数组去重
        Array.prototype.unique = function(){
            this.sort(); //先排序
            var res = [this[0]];
            for(var i = 1; i < this.length; i++){
                if(this[i].ferry_id !== res[res.length - 1].ferry_id){
                    res.push(this[i]);
                }
            }
            return res;
        }
        //海安港
        return array.unique();
    }
    //存储数据至数据库
    async storeFerryService () {
        const ferryArr = await this.getFerryArray();
        let result;
        if (ferryArr.length>0) {
            result = await this.app.mysql.insert('ferry', ferryArr);
            if (result.affectedRows > 0){
                return "已抓取并且插入【" + result.affectedRows + "】条数据至数据库";
            } else {
                return "数据库存储失败";
            }
        } else {
            return "抓取数据失败";
        }
    }
}

module.exports = CrawlerService;