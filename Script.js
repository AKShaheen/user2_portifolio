let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');
let section = document.querySelector('#section');
let navlinks = document.querySelector('#header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY();
        let offset = window.offsetTop() - 150;
        let hight = sec.offsetHight();
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hight){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');

            })
        }
    });
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
}  