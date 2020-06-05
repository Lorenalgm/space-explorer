const { RESTDataSource } = require('apollo-datasource-rest');

class LauchAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://api.spacexdata.com/v2/';
    }
} 

module.exports = LauchAPI;