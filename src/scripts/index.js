import '../styles/index.scss';

import Header from '../blocks/header/header';
import Menu from "../blocks/menu/menu";
import generateIndexPage from "./pages/index";
import animationsIndexPage from "./pages/index/animations";

(function () {
  class Constructor {
    constructor() {
      window.addEventListener('load', this.load.bind(this));
    }

    load() {
      generateIndexPage();
      this.logics();
      animationsIndexPage();
    }

    logics() {
      new Header();
      new Menu();
    }
  }

  new Constructor();
})();
