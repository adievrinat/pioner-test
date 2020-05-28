import Menu from "../menu/menu";

export default class Header {
  constructor() {
    this.component = document.querySelector('[data-header]');
    this.logo = this.component.querySelector('[data-logo]');
    this.open = false;
    this.menu = new Menu();

    this.headerTransformation = this.headerTransformation.bind(this);

    this.init();
  }

  init() {
    this.events(this.component);
  }

  events(menu) {
    let triggerMenu = menu.querySelector('[data-burger]');

    triggerMenu.addEventListener('click', () => {
      this.openMenu(menu, triggerMenu);
    });

    window.addEventListener('scroll', () => {
      this.headerTransformation(this.logo);
    });
  }

  openMenu(component, burger) {
    let cabinet = component.querySelector('[data-cabinet-link]');
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

      this.blockedScroll(component, menu, 'hidden', scrollBarWidth);

      this.menu.typingText(menu);

    } else if (this.open && cabinetHasClass && menuHasClass && burgerHasClass) {
      this.open = false;
      burger.style.pointerEvents = 'none';

      setTimeout(() => {
        burger.style.pointerEvents = 'auto';
      }, 1000);

      cabinet.classList.remove('header__cabinet-link_show');
      menu.classList.remove('menu_show');
      burger.classList.remove('header__burger_open-menu');

      if (!burgerHasClassAfter)
        burger.classList.add('header__burger_hide-menu');

      this.blockedScroll(component, menu, 'auto', '0');
    }
  }

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

  blockedScroll(component, menu, overflow, scrollBarWidth) {
    document.body.style.overflow = overflow;
    document.body.style.paddingRight = scrollBarWidth + 'px';
    component.style.paddingRight = scrollBarWidth + 'px';
    menu.style.paddingRight = scrollBarWidth + 'px';
  }
}