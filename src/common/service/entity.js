'use strict';
let _ = require('lodash');
let model, attrModel, typeModel;

export default class extends think.service.base {
  /**
   * init
   * @return {}         []
   */
  init(model, attributeModel, typeModel) {
    //super.init(...args);
    model = model;
    attrModel = attributeModel;
    typeModel = typeModel;
  }

  async find(findData) {
    if ((_.isInteger(findData) && findData > 0) || _.parseInt(findData) > 0) {
      let id = findData;
      let data = await model.where({ _id: id }).select();
      return data;
    }
  }

  //get entity with related type and attributes
  get(findData) {

  }

  findAll(findData) {

  }

  getAll(findData) {

  }

  create(data) {

  }

  batchCreate(data, checkExit) {

  }

  findOrCreate(findData, data) {

  }

  createOrUpdate(findData, data) {

  }

  update(findData, data) {

  }

  delete(findData) {

  }

  addAttribute(data, checkExit) {

  }

  batchAddAttribute(data, checkExit) {

  }

  updateAttribute(data, createOrUpdate) {

  }

  findAttribute(findData) {

  }

  findAllAttribute(findData) {

  }

  deleteAttribute(findData) {

  }


}