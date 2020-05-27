export default class Header {
  constructor() {
    this.component = document.querySelector('[data-header]');
    this.logo = this.component.querySelector('[data-logo]');
    this.open = false;

    this.headerTransformation = this.headerTransformation.bind(this);

    this.init();
  }

  init() {
    this.events(this.component);
  }

  events(element) {
    let triggerMenu = element.querySelector('[data-burger]');

    triggerMenu.addEventListener('click', () => {
      this.openMenu(element, triggerMenu);
    });

    window.addEventListener('scroll', () => {
      this.headerTransformation(this.logo);
    });
  }

  openMenu(element, burger) {
    let cabinet = element.querySelector('[data-cabinet-link]');
    let menu = document.querySelector('[data-menu]');
    let cabinetHasClass = cabinet.classList.contains('header__cabinet-link_show');
    let menuHasClass = menu.classList.contains('menu_show');
    let burgerHasClass = burger.classList.contains('header__burger_open-menu');
    let burgerHasClassAfter = burger.classList.contains('header__burger_hide-menu');
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (!this.open && !cabinetHasClass && !menuHasClass && !burgerHasClass) {
      this.open = true;
      burger.style.pointerEvents = 'none';

      setTimeout(() => {
        burger.style.pointerEvents = 'auto';
      }, 1500);

      cabinet.classList.add('header__cabinet-link_show');
      menu.classList.add('menu_show');
      burger.classList.add('header__burger_open-menu');

      /*
      изначально нет класса header__burger_hide-menu (он активирует анимацию бурера после закрытия меню),
      поэтому эту проверку нельзя вынести в общее условие выше
       */
      if (burgerHasClassAfter)
        burger.classList.remove('header__burger_hide-menu');

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollBarWidth + 'px';
      element.style.paddingRight = scrollBarWidth + 'px';
      menu.style.paddingRight = scrollBarWidth + 'px';

      this.typingText(menu);

    } else if (this.open && cabinetHasClass && menuHasClass && burgerHasClass) {
      this.open = false;
      cabinet.classList.remove('header__cabinet-link_show');
      menu.classList.remove('menu_show');
      burger.classList.remove('header__burger_open-menu');

      if (!burgerHasClassAfter)
        burger.classList.add('header__burger_hide-menu');

      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
      element.style.paddingRight = '0';
      menu.style.paddingRight = '0';
    }
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
    if (length > path && this.open) {
      textEntry.innerHTML += symbols[path];
      path = path + 1;

      setTimeout(() => {
        this.addSymbol(length, path, textEntry, symbols);
      }, 70);
    }
  };

  headerTransformation(logo) {
    const cls = 'header__logo_transformation';
    const logoHasClass = logo.classList.contains(cls);

    if (window.pageYOffset > window.innerHeight && !logoHasClass) {
      logo.classList.add(cls);
      this.component.classList.add('header_transformation');
    } else if (window.pageYOffset <= window.innerHeight && logoHasClass) {
      logo.classList.remove(cls);
      this.component.classList.remove('header_transformation');
    }
  }
}