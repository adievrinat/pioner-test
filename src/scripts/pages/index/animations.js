import Main from "../../../blocks/main/main";
import scrollAnimation from "../../utils/scrollAnimation";

const animationsIndexPage = () => {
  const preloader = document.querySelector('[data-preloader]');
  const partOne = preloader.querySelector('.preloader__part-one');
  const partTwo = preloader.querySelector('.preloader__part-two');
  const header = document.querySelector('[data-header]');
  const sectionInfo = document.querySelectorAll('[data-section-info]');
  const steps = document.querySelectorAll('[data-step]');
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollBarWidth + 'px';

  const animation = () => {
    setTimeout(() => {
      preloader.classList.add('preloader_animate');
      partOne.classList.add('preloader__part-one_animate');
      partTwo.classList.add('preloader__part-two_animate');

      setTimeout(() => {
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
        header.classList.add('header_animate');

        new Main();

        window.addEventListener('scroll', () => {
          sectionInfo.forEach(element => {
            scrollAnimation(element, 'section-info_animate', -200, true);
          });

          steps.forEach(element => {
            scrollAnimation(element, 'step_animate', -200, true);
          });
        });
      }, 3000);
    }, 1000);
  };

  animation();
};

export default animationsIndexPage;