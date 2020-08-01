import React from 'react';

function PopupWithForm({ name, isOpened, title, children, onClose }) {
  return (
      <section className={`popup popup_type_${name} ${isOpened && "popup_is-opened"}`}>
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_edit-profile" onClick={onClose} type="button"></button>
          <h3 className="popup__title">{title}</h3>
          <form className="popup__form popup__form_type_edit-profile" name={name} noValidate>
            {children}
            <button className="popup__button popup__button_type_save" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm;