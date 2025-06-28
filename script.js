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
}
init();