let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let id = sec.getAttribute('id');
        if(top>= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('current');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('current');
            })
        }
    })
}

