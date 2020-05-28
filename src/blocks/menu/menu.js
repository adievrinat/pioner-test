import PerfectScrollbar from 'perfect-scrollbar';

class Menu {
  constructor() {
    this.component = document.querySelector('[data-menu]');
    this.scrollContainer = this.component.querySelector('[data-perfect-scrollbar]');
    this.init();
  }

  init() {
    const ps = new PerfectScrollbar(this.scrollContainer);
  }

  typingText(menu) {
    let navigationListItem = menu.querySelectorAll('[data-list-item]');

    navigationListItem.forEach(element => {
      let text = element.getAttribute('data-value');
      let timeout = element.getAttribute('data-timeout');
      let textEntry = element.querySelector('[data-text-entry]');
      let symbols = text.split("");
      let length = symbols.length;
      let path = 0;
      textEntry.innerHTML = '';

      setTimeout(() => {
        this.addSymbol(length, path, textEntry, symbols);
      }, +timeout);
    });
  }

  addSymbol(length, path, textEntry, symbols) {
    if (length > path) {
      textEntry.innerHTML += symbols[path];
      path = path + 1;

      setTimeout(() => {
        this.addSymbol(length, path, textEntry, symbols);
      }, 70);
    }
  };
}

export default Menu;