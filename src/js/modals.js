document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  const modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      const modalId = this.getAttribute('data-modal');

      const modalElem = document.querySelector(
        '.modal[data-modal="' + modalId + '"]'
      );

      const sendButton = document.querySelector(
        '[data-button-' + modalId + ']'
      );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
      window.addEventListener('keydown', onEscKeyPress);
      document.body.classList.add('modal-open');

      sendButton.addEventListener('click', function (el) {
        el.preventDefault();
        let markup = modalElem.innerHTML;

        modalElem.innerHTML =
          '<p class="window__text" style="background-color: #ffffff; padding: 10px; border-radius: 10px;">Good! Your order is accepted! Thanks❤️</p>';
        window.removeEventListener('keydown', onEscKeyPress);
        setTimeout(() => {
          document.querySelector('.modal.active').classList.remove('active');
          document
            .querySelector('.modal-overlay.active')
            .classList.remove('active');
          document.body.classList.remove('modal-open');
        }, 2000);
        setTimeout(() => {
          // console.log(markup);
          modalElem.innerHTML = markup;
        }, 2250);
      });
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const parentModal = this.closest('.modal');
      // console.log(e);
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }); // end foreach

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
      document.querySelector('.modal.active').classList.remove('active');
      document
        .querySelector('.modal-overlay.active')
        .classList.remove('active');
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
}); // end ready
