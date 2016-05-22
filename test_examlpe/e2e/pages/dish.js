var Dish = function() {
  var name = element(by.binding('dish.name'));
  var author = element.all(by.repeater('comment in dish.comments')).first().element(by.binding('comment.author'));
  var comments = element.all(by.repeater('comment in dish.comments'));
  var orderField = element(by.model('orderText'));

  this.get = function() {
    browser.get('http://localhost:3001/#/menu/0');
  };

  this.getName = function() {
    return name.getText();
  };

  this.getAuthor = function() {
    return author.getText();
  };

  this.getCommentsCount = function() {
    return comments.count();
  };

  this.sortCommentsBy = function(param) {
    orderField.sendKeys(param);
  }
};

module.exports = Dish;
