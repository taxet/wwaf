var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/success', function(req, res, next) {
  res.json({success:'ok'});
});

router.get('/car/:id', function(req, res, next) {
  var car={
    'id': req.params.id,
    'imgs': [],
    'desc': "This is description."
  };
  res.json(car);
});

router.get('/blogs/index', function(req, res, next) {
  res.json({
    'img': '/images/div3.jpg',
    'title': '留学生新移民购车驾车指南',
    'content': '大多数华人同胞们或多或少被黑心dealer坑过。更重要的你花了比美国人多得钱，得到的却是被种族歧视对待的服务；甚至出现dealer对待本地人是迎来送往，笑脸连连；而在对待中国人的时候，却表现得爱搭不理？为什么我们花的钱比本地人多，却得不到平等的尊重？为什么我们买车花的钱更多，汽车出现的问题也更多？为什么我们华人买车就有这么多问题...',
    'link': '/blog/test'
  });
})

module.exports = router;

  /*res.json([
    {
      'id': 1,
      'link': './blog/01',
      'img': './images/div3.jpg',
      'title': 'Blog 1',
      'subtitle': 'This is blog 1.'
    },
    {
      'id': 2,
      'link': './blog/02',
      'img': './images/div3.jpg',
      'title': 'Blog 2',
      'subtitle': 'This is blog 2.'
    },
    {
      'id': 3,
      'link': './blog/03',
      'img': './images/div3.jpg',
      'title': 'Blog 3',
      'subtitle': 'This is blog 3.'
    },
    {
      'id': 4,
      'link': './blog/04',
      'img': './images/div3.jpg',
      'title': 'Blog 4',
      'subtitle': 'This is blog 4.'
    }
  ]);*/
