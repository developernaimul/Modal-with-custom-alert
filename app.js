// Get Elements

const button = document.getElementById('apply');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const banner = document.querySelector('.banner');

button.addEventListener('click', function(){

    modal.classList.add('active');
    banner.style.backdropFilter = 'blur(30px)';
});

close.addEventListener('click', function(){
    modal.classList.remove('active');
    banner.style.backdropFilter = 'blur(10px)';
});

banner.addEventListener('click', function(e){
    if( e.target == this ){
        modal.classList.remove('active');
        banner.style.backdropFilter = 'blur(10px)';
    }
});