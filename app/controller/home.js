'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //抓取数据后持久化到数据库
    const result = await this.ctx.service.crawler.storeFerryService();
    
    //const info = await this.ctx.service.user.find();
    this.ctx.body = result;
  }
}

module.exports = HomeController;
