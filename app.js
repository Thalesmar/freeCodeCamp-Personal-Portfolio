const bar = document.getElementById('bar');
const nav = document.getElementById('navBar');
const close = document.getElementById('close');

bar.addEventListener('click' , function(){
    nav.classList.add('active');
});

close.addEventListener('click' , function(){
    nav.classList.remove('active');
});



