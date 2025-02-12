class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupSelector = popupSelector;
    this._addTodoCloseButton = this._popup.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }
  _handleEscapeClose(e) {
    if (e.key === "Escape") {
      console.log("escape key pressed");

      this.close();
    }
  }

  setEventListeners() {
    this._addTodoCloseButton.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;

//const popup = new Popup("#add-todo-popup");
