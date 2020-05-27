export default class Main {
  constructor() {
    this.component = document.querySelector('.main');
    this.textEl = this.component.querySelectorAll('[data-typing]');
    this.title = this.component.querySelectorAll('[data-main-title]');
    this.nav = this.component.querySelector('[data-navigation]');

    this.init();
  }

  init() {
    setTimeout(() => {
      this.typingText(this.textEl);
    }, 400);
  }

  typingText(texts) {
    texts.forEach(element => {
      let text = element.getAttribute('data-value');
      let textEntry = element.querySelector('[data-text-entry]');
      let symbols = text.split("");
      let length = symbols.length;
      let path = 0;

      this.addSymbol(length, path, textEntry, symbols);
    });
  }

  addSymbol(length, path, textEntry, symbols) {
    if (length > path) {
      textEntry.innerHTML += symbols[path];
      path = path + 1;

      setTimeout(() => {
        this.addSymbol(length, path, textEntry, symbols);
      }, 80);
    } else {
      //появление остального контента
      this.animation();
    }
  };

  animation() {
    this.title.forEach(element => {
      const titleClsAnimate = 'main__title_animate';

      if (!element.classList.contains(titleClsAnimate))
        element.classList.add(titleClsAnimate);
    });

    const navClsAnimate = 'main__navigation_animate';

    if (!this.nav.classList.contains(navClsAnimate))
      this.nav.classList.add(navClsAnimate);
  }
}