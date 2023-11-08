const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const photos = document.querySelector('.photos');

let index = 0;

prevButton.addEventListener('click', () => {
  if (index === 0) return;
  index -= 1;
  photos.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
  console.log(index);
  if (index === 24) return;
  index += 1;
  photos.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
});
