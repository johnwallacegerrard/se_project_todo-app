class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
      console.log(this._items);
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}

export default Section;
