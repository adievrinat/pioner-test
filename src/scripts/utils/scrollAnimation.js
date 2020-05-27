const scrollAnimation = (block, cls, offset = 0, infinity = false) => {
  let position = block.getBoundingClientRect();
  let top = position.top + window.pageYOffset ;
  let hasClass = block.classList.contains('scroll-animation');

  if (typeof block === 'object' && block && typeof cls === 'string') {
    if (window.pageYOffset  + window.innerHeight + offset >= top && !block.classList.contains(cls) && hasClass) {
      block.classList.add(cls);
    } else if (window.pageYOffset  + window.innerHeight + offset < top && block.classList.contains(cls) && hasClass && infinity) {
      block.classList.remove(cls);
    }
  }
};

export default scrollAnimation;