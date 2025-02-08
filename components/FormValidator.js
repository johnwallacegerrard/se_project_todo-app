class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formSelector = settings.formSelector;
  }

  /*showInputError (
      formElement,
      inputElement,
      errorMessage,
      settings
    ) => {
      const errorElementId = `#${inputElement.id}-error`;
      const errorElement = formElement.querySelector(errorElementId);
      inputElement.classList.add(settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(settings.errorClass);
    };

    const hideInputError = (formElement, inputElement, settings) => {
      const errorElementId = `#${inputElement.id}-error`;
      const errorElement = formElement.querySelector(errorElementId);
      inputElement.classList.remove(settings.inputErrorClass);
      errorElement.classList.remove(settings.errorClass);
      errorElement.textContent = "";
    };

    const checkInputValidity = (formElement, inputElement, settings) => {
      
    };

    

    

    const setEventListeners = (formElement, settings) => {
      
    };

    
    */
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError(inputElement) {
    console.log("show error");
    const errorElement = this._formEl.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
  }

  //   _disableButton() {
  //     this._buttonElement.classList.add(this._inactiveButtonClass);
  //     this._buttonElement.disabled = true;
  //   }

  //   _enableButton() {
  //     this._buttonElement.classList.remove(this._inactiveButtonClass);
  //     this._buttonElement.disabled = false;
  //   }

  //   _toggleButtonState() {
  //     if (this._hasInvalidInput()) {
  //       this._disableButton();
  //     } else {
  //       this._enableButton();
  //     }
  //   }

  _toggleButtonState(inputElement) {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      console.log("valid");
      // Call hideInputError method
    }
  }

  /*_checkInputValidity() {
    console.log("its working");
    if (!this._ipn.validity.valid) {
      showInputError(
        this._formEl,
        this._inputSelector,
        this._inputEl.validationMessage,
        settings
      );
    } else {
      hideInputError(this._formEl, this._inputSelector, settings);
    }
  }*/

  _setEventListeners() {
    console.log("its working");
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formEl.querySelector(
      this._submitButtonSelector
    );

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
export default FormValidator;
