const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe("Generic item (common behaviours)", function() {
    it.each([
      ["horse",0,-5],
      ["Aged Brie",-10,-20],
      ["Conjured banana",5,-5]
    ])("should have quality never decrease below 0", (name,sellIn,quality) => {
      var gildedRose = new Shop([new Item(name,sellIn,quality)]);
      gildedRose = new Shop (gildedRose.updateQuality());
      expect(gildedRose.items[0].quality).toBe(0);
    });
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

    it("should have quality increase in value by 2 while sellIn less than or equal to 0",function(){
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


  describe("conjured item",function(){
    it("should have sellIn value decrease in value", function() {
      var gildedRose = new Shop([new Item("Conjured hat",5,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].sellIn).toBe(0);
    });

    it("should have quality decrease in value by 2 while sellIn greater than 0",function(){
      var gildedRose = new Shop([new Item("Conjured umbrella",5,30)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(20);
    });

    it("should have quality decrease in value by 4 while sellIn less than or equal to 0",function(){
      var gildedRose = new Shop([new Item("Conjured toothbrush",0,30)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(10);
    });
    it("should have quality never decrease below 0",function(){
      var gildedRose = new Shop([new Item("Conjured rabbit",0,0)]);
      for (var i=0; i<5;i++){
        gildedRose = new Shop (gildedRose.updateQuality());
      }
      expect(gildedRose.items[0].quality).toBe(0);
    });
  });
  describe("multiple items",function(){
    it("should updated sellIn on each item", function(){
      var gildedRose = new Shop([new Item("Conjured pizza",5,10), new Item("banana",50,50), new Item("Sulfuras, Hand of Ragnaros",10,80)]);
      gildedRose = new Shop(gildedRose.updateQuality());
      expect(gildedRose.items[0].sellIn).toBe(4);
      expect(gildedRose.items[1].sellIn).toBe(49);
      expect(gildedRose.items[2].sellIn).toBe(10);
    });
    it("should updated quality on each item", function(){
      var gildedRose = new Shop([new Item("Conjured pizza",5,10), new Item("banana",50,50), new Item("Sulfuras, Hand of Ragnaros",10,80)]);
      gildedRose = new Shop(gildedRose.updateQuality());
      expect(gildedRose.items[0].quality).toBe(8);
      expect(gildedRose.items[1].quality).toBe(49);
      expect(gildedRose.items[2].quality).toBe(80);
    });
  });
});
