
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("stickly", window.scrollY>0);
});


function toggleMenu(){
    const menuToggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}