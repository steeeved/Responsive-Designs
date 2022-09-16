const svg = document.querySelectorAll('path');
const background = document.querySelector('.dropdownBackground');
const mapdiv = document.querySelector('.mapdiv');
const kenya = document.querySelector('svg');

const kenyaCoords = kenya.getBoundingClientRect();
const kenyanCoords = {
  width: kenyaCoords.width,
  height: kenyaCoords.height,
  top: kenyaCoords.top,
  left: kenyaCoords.left
};

const backgroundCoords = background.getBoundingClientRect();
const backgroundkenyanCoords = {
  width: backgroundCoords.width,
  height: backgroundCoords.height,
  top: backgroundCoords.top,
  left: backgroundCoords.left
};


function handleEnter(path) {
  background.classList.add('open');
  // Change fill to white
  path.style.fill = '#fff';

  const pathCoords = path.getBoundingClientRect();
  console.log(pathCoords);
  const coords = {
    width: pathCoords.width,
    height: pathCoords.height,
    top: pathCoords.top,
    left: pathCoords.left
  };
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave(path) {
//   path.classList.remove('trigger-enter');
//   background.classList.remove('open');
  path.style.fill = '#000';
}



//listen for a mouse enter in the svg
svg.forEach((path) => {
  path.addEventListener('mouseenter', () => {
    handleEnter(path);
  });
  path.addEventListener('mouseleave', () => {
    handleLeave(path);
  });
});

// mapdiv.addEventListener('mouseleave', () => {
//     background.classList.remove('open');
// });
