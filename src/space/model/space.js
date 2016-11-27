'use strict';
/**
 * model
 */
export default class extends think.model.base {
    /**
   * 数据表字段定义
   * @type {Object}
   */
    schema = {
        _id: {
            name: "id",
            type: "int", //类型
            required: true, //是否必填
            primary: true, //是否是主键
            unique: true, //是否唯一
            auto_increment: true //是否自增
        },
        name: {
            type: "string", //类型
            required: true, //是否必填
            unique: true, //是否唯一
        },
        alias: {
            type: "string", //类型
        },
        description: {
            type: "string", //类型
        },
        type_id: {
            type: "int", //类型
            default: -1
        },
        parent_id: {
            type: "int", //类型
            default: -1
        },
        fullname: {
            type: "string", //类型
            required: true, //是否必填
            unique: true, //是否唯一
        },
        create_time: { //创建时间
            default: () => { //获取当前时间
                return moment().format("YYYY-MM-DD HH:mm:ss")
            },
            readonly: true //只读，添加后不可修改
        },
        update_time: { //创建时间
            default: () => { //获取当前时间
                return moment().format("YYYY-MM-DD HH:mm:ss")
            },
            update: true //只读，添加后不可修改
        },
        data: {
            type: "text" //用于输入一些非常规数据
        }
    }

    find(){

    }

    findAll(){
        
    }
}