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
  // button 
  const homebtn = document.querySelector('.homebtn')
  homebtn.addEventListener('click',()=>{
     window.scrollTo({ top: 0, behavior: 'smooth' });
  })
  const aboutbtn = document.querySelector('.aboutbtn');
  const aboutme = document.querySelector('.aboutme')
  aboutbtn.addEventListener('click',()=>{
    aboutme.scrollIntoView({behavior:'smooth'})
  })
  const skillbtn = document.querySelector('.skillbtn');
  const skills = document.querySelector('.skills');
  skillbtn.addEventListener('click',()=>{
    skills.scrollIntoView({behavior:'smooth'})
  })
  const projectbtn = document.querySelector('.projectbtn');
  const Projects = document.querySelector('.Projects');
  projectbtn.addEventListener('click',()=>{
    Projects.scrollIntoView({behavior:'smooth'});
  })
  const Contactbtn = document.querySelector('.Contactbtn');
  const reachme = document.querySelector('.reachme');
  Contactbtn.addEventListener('click',()=>{
    reachme.scrollIntoView({behavior:'smooth'});
  })
 
}
 function scrollToTop(){
    window.scrollTo({top: 0,behavior:'smooth'})
  }
init();