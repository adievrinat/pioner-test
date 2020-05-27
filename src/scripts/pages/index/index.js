import header from "../../../blocks/header/template";
import menu from "../../../blocks/menu/template";
import main from "../../../blocks/main/template";
import contentWrapper from "../../../blocks/content-wrapper/template";

const generateIndexPage = () => {
  document.getElementById("root__index").innerHTML =
    header
    + menu
    + main
    + contentWrapper;
};

export default generateIndexPage;