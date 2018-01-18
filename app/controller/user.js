'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        //根据url请求获取userid
        const userId = this.ctx.params.id;
        //调用服务查询用户信息
        const userInfo = await this.ctx.service.user.getHaianService(userId);
        this.ctx.body = userInfo;
    }
}
module.exports = UserController;