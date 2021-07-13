const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  describe("non-special item",function(){
    it("should have sellIn value decrease in value", function() {
      var gildedRose = new Shop([new Item("hat",5,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].sellIn).toBe(0);
    });
    it("should have quality decrease in value by 1 while sellIn greater than 0",function(){
      var gildedRose = new Shop([new Item("hat",15,30)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(25);
    });
    it("should have quality decrease in value by 2 when sellIn less than or equal to 0",function(){
      var gildedRose = new Shop([new Item("hat",0,15)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(5);
    });
    
    it("should have quality never decrease below 0",function(){
      var gildedRose = new Shop([new Item("hat",0,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(0);
    });
  });

  describe("aged-brie",function(){
    it("should have sellIn value decrease in value", function() {
      var gildedRose = new Shop([new Item("Aged Brie",5,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].sellIn).toBe(0);
    });
    it("should have quality increase in value by 1 while sellIn greater than 0",function(){
      var gildedRose = new Shop([new Item("Aged Brie",15,30)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(35);
    });

    it("should have quality increase in value while sellIn less than or equal to 0",function(){
      var gildedRose = new Shop([new Item("Aged Brie",0,15)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(25);
    });

    it("should have quality never increase above 50",function(){
      var gildedRose = new Shop([new Item("Aged Brie",10,49)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(50);
    });
  });
  
  describe("sulfuras",function(){

    it("should have sellIn value never decrease in value", function() {
      var gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros",5,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].sellIn).toBe(5);
    });

    it("should have quality stay at 80 when sellIn greater than 0",function(){
      var gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros",15,80)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(80);
    });

    it("should have quality stay at 80 while sellIn less than or equal to 0",function(){
      var gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros",0,80)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(80);
    });
  });

  describe("backstage passes",function(){
    it("should have sellIn value decrease in value", function() {
      var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",5,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].sellIn).toBe(0);
    });

    it("should have quality increase in value by 3 while 0 < sellIn < 6",function(){
      var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",5,30)]);
      for (var i=0; i<2;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(36);
    });

    it("should have quality increase in value by 2 while 0 < sellIn < 11",function(){
      var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",10,30)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(40);
    });
    it("should have quality increase in value by 1 while sellIn greater than 10",function(){
      var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",30,30)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(35);
    });
    it("should have quality be set to 0 when sellIn less than 0",function(){
      var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",3,15)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it("should have quality never increase above 50",function(){
      var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert",10,49)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(50);
    });
  });
});
