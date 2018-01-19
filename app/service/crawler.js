const Service = require('egg').Service;
const http = require('http')
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')

class CrawlerService extends Service {
    constructor(ctx){
        super(ctx);
    }
    
    async getHTML (url) {
        var array = [];
        http.get(url, function(res) {
            let html = '';
            res.setEncoding('utf-8');
            res.on('data', function(data) {
                html += data;
            })
            res.on('end', function(err) {
                if(err) {
                    console.log(err)
                }else{
                    var $ = cheerio.load(html);
                    
                    const head = ['ferry_id', 'ferry_name', 'ferry_startTime', 'ferry_state',
                        'ferry_salabilityPassenger', 'ferry_salabilityCar', 'ferry_salabilityCoach', 'ferry_price'];
                    $('#2integral_div2 table tr').each(function (i) {
                        let json = {};
                        $(this).find('td').each(function (i) {
                            json[head[i]] = $(this).text();
                            json['ferry_arriveTime'] = '01-18 21:00';
                            json['ferry_startPort'] = '海安港';
                            json['ferry_arrivePort'] = '海口秀英港';
                        })
                        if (i > 0){
                            array.push(json);
                        }
                    })
                    //console.log(array);
                }
            })
        })
        return array;
    }

    async getFerryService () {
        let r = await this.getHTML("http://www.haianport.com/Cursailok.php");
        //to do 保存航班数据
        console.log("获取服务");
        console.log(r);
        return r;
    }
}

module.exports = CrawlerService;