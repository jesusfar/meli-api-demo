class Category {
  constructor(id, name, picture, totalItemsInCategory, pathFromRoot) {
    this.id = id,
    this.name = name,
    this.picture = picture,
    this.totalItemsInCategory = totalItemsInCategory,
    this.pathFromRoot = pathFromRoot
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getPicture() {
    return this.picture;
  }

  get getTotalItemsInCategory() {
    return this.totalItemsInCategory;
  }

  get getPathFromRoot() {
    return this.pathFromRoot;
  }
}

module.exports = Category;
