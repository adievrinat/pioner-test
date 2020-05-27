import sectionInfo from "../section-info/template";
import steps from "../steps/template";

const contentWrapper =
  `
    <div class="content-wrapper">
      ${ sectionInfo }
      ${ steps }
    </div>
  `;

export default contentWrapper;