let Mock  = require('mockjs')
let Index = require('./index')
let news = require('./news')

let Random = Mock.Random
module.exports = function() {
  var data = { 
    news: news(),
    index: Index
  }
  return data
}