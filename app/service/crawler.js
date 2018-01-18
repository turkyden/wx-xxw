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
        await http.get(url, (res) => {
            let html = '';
            res.setEncoding('utf-8');
            res.on('data', (data) => {
                html += data;
            })
            res.on('end', (err) => {
                if(err) {
                    console.log(err)
                }else{
                    const $ = cheerio.load(html);
                    console.log($('#2integral1').text());
                }
            })
        })
    }

    async getFerryService () {
        let resouse = await this.getHTML("http://www.haianport.com/Cursailok.php");
        //to do 保存航班数据
        return resouse
    }
}

module.exports = CrawlerService;