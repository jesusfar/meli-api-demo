class Item {

  constructor(id, categoryId, sellerId, title, price, picture, condition, freeShipping, soldQuantity, description) {
    this.id = id;
    this.categoryId = categoryId;
    this.sellerId = sellerId;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.freeShipping = freeShipping;
    this.soldQuantity = soldQuantity;
    this.description = description;
  }

  get getId() {
    return this.id;
  }

  get getCategoryId() {
    return this.categoryId;
  }

  get getSellerId() {
    return this.sellerId;
  }

  get getTitle() {
    return this.title;
  }

  get getPrice() {
    return this.price;
  }

  get getPicture() {
    return this.picture;
  }

  get getCondition() {
    return this.condition;
  }

  get getFreeShipping() {
    return this.freeShipping;
  }

  get getSoldQuantity() {
    return this.soldQuantity;
  }

  get getDescription() {
    return this.description;
  }
}

module.exports = Item;

