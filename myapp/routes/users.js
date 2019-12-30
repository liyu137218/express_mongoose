var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/liyu1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('数据库链接成功')
  // 表模型
  // let stutendSchema = 


});
//  表名
let Stutend = mongoose.model('Stutend', mongoose.Schema({
  name: String,
  age: Number,
  first_name: String,
  last_name: String,
  time: { type: Date, default: Date.now },
  sale: Boolean,
  arr: Array,
}));
// // 表内添加数据
// let liyu = new Stutend({ name: 'liyuname' + Math.random() })
// // 保存到数据库
// liyu.save(function (err, liyu) {
//   if (err) return console.error(err);
// });
// 查询表 里面的所有内容
let stuAll = ''
Stutend.find(function (err, stutend) {
  if (err) return console.error(err);
  console.log(stutend);
  stuAll = stutend
})


/* GET users listing. */
router.get('/', function (req, res, next) {

  console.log(req.query);
  // 表内添加数据
  let newliyu = new Stutend({ first_name: req.query.first_name, last_name: req.query.last_name })
  // 保存到数据库
  newliyu.save(function (err, newliyu) {
    if (err) return console.error(err);
  });

  res.send('保存成功 ');
});

module.exports = router;
