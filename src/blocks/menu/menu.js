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

  events(element) {

  }
}

export default Menu;