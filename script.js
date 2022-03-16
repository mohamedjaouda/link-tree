const img = document.getElementById('pic')
const effect = document.getElementById('main')

const handleEvent = () => {
  img.classList.toggle('img-zoomed')
};

img.addEventListener('click', handleEvent)

