function init(){
  const toggle = document.querySelector('.themeToggle');
  const icon = toggle.querySelector('i');
    toggle.onclick = ()=>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    } else {
      icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    }
  }
  const cv = document.querySelector('.cv');
const overlay = document.querySelector('.overlay');
const closeCv = document.querySelector('.close-cv');

cv.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

closeCv.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

}
init();