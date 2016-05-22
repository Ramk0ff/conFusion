'use strict';
var Dish = require('./pages/dish.js');
var dish = new Dish();

describe('conFusion App E2E Testing', function() {

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  describe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/');
    });

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Ristorante Con Fusion');
    });
  });

  describe('menu 0 item', function() {
    beforeEach(function() {
      dish.get();
    });

    it('should have a name', function() {
      expect(dish.getName()).toEqual('Uthapizza Hot $4.99');
    });

    it('should show the number of comments as', function() {
      expect(dish.getCommentsCount()).toEqual(5);
    });

    it('should show the first comment author as', function() {
      dish.sortCommentsBy('author');
      expect(dish.getCommentsCount()).toEqual(5);
      expect(dish.getAuthor()).toContain('25 Cent');
    });
 });
});
