function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
    //return;
  }

  // create some variable for working with the slider
  let current;
  let prev;
  let next;

  //select the elements needed for the sliders
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  
  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
      prev = current.previousElementSibling || slides.lastElementChild;
      next = current.nextElementSibling || slides.firstElementChild;
    console.log({current, prev, next});
    }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    //first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    //Other short methode  [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
  
    if(direction === 'back') {
      //make the new array into new value, and destructure them over and into the prev, current and the next varriable.
      //swap the variable when we go backwards
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
      //do the opposite if we go forwards
      [prev, current, next] = [
        current, next, next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }

  //When this slider is created, run the start slider function.
  startSlider();
  applyClasses();

  //Event listener move(); to delete all the classes from the elements
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);

}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));