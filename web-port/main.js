const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const sections=document.querySelectorAll('section[id]');
function scrollActive()
{
    const scrollY=window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-50,
        sectionId=current.getAttribute('id');
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight)
        {
            document
            .querySelector('.nav_menu a[href*='+sectionId+']')
            .classList.add('active_link');
        }
        else{
            document
            .querySelector('.nav_menu a[href*='+sectionId+']')
            .classList.remove('active_link');
        }
    });
}
window.addEventListener('scroll',scrollActive);

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon-o');
    if(this.classList.toggle('fa-sun-o')){
        document.documentElement.style.setProperty('--col1', 'black')
        document.documentElement.style.setProperty('--col2', 'white')
        document.documentElement.style.setProperty('--nav', 'rgba(80, 79, 79, 0.886)')
        document.documentElement.style.setProperty('--label', 'rgba(130, 127, 127, 0.886)')
        body.style.transition = '1s';
    }else{
        document.documentElement.style.setProperty('--col1', 'rgb(212, 210, 210)')
        document.documentElement.style.setProperty('--col2', '#10101a')
        document.documentElement.style.setProperty('--nav', 'rgba(20, 20, 20, 0.921)')
        body.style.transition = '1s';
    }
});

const btn = document.getElementById('btn');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Sent';
});