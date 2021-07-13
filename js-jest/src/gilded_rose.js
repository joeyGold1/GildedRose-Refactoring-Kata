class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var item of this.items) {
      var qualityModifier;
      var max50;
      var min0;
      var times2;
      var sellInDecrease;
      
      switch (item.name){
        case "Aged Brie":
          qualityModifier=1;
          max50  = true;
          min0   = true;
          times2 = true;
          sellInDecrease = true;
          break;
        case "Sulfuras, Hand of Ragnaros":
          qualityModifier=0;
          max50  = false;
          min0   = false;
          times2 = true;
          sellInDecrease = false;          
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          max50  = true;
          min0   = true;
          times2 = false;
          sellInDecrease = true;
          qualityModifier = Shop.getBackstagePassQualityModifier(item);  
          break;
        default:
          max50  = true;
          min0   = true;
          times2 = true;
          sellInDecrease = true;
          qualityModifier = (item.name.startsWith("Conjured")? -2 : -1);;
      }
      Shop.applyItemModifications(item,qualityModifier,max50,min0,times2,sellInDecrease);
    }
    return this.items;
  }

  static getBackstagePassQualityModifier(item){
    var qualityModifier=1;
    if (item.sellIn <= 10) {qualityModifier+=1;}
    if (item.sellIn <=  5)  {qualityModifier+=1;}
    if (item.sellIn <=  0)  {qualityModifier=-item.quality;}
    return qualityModifier;
  }
  static applyItemModifications(item,qualityModifier,max50,min0,times2,sellInDecrease){
    qualityModifier = ((item.sellIn <= 0 && times2) ? qualityModifier*2 : qualityModifier);
    item.quality+=qualityModifier;
    item.quality = (max50? Math.min(item.quality,50) : item.quality);
    item.quality = (min0? Math.max(item.quality,0)   : item.quality);
    item.sellIn  = (sellInDecrease? item.sellIn - 1  : item.sellIn);
  }
}

module.exports = {
  Item,
  Shop
}
