// Get Elements

const button = document.getElementById('apply');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const banner = document.querySelector('.banner');
const discard = document.querySelector('.discard');
const keepedit = document.querySelector('.edit');
const alert = document.querySelector('.alert');
const editclose = document.querySelector('.edit-close');


button.addEventListener('click', function(){

    modal.classList.add('active');
    banner.style.backdropFilter = 'blur(30px)';
});

// close.addEventListener('click', function(){
//     modal.classList.remove('active');
//     banner.style.backdropFilter = 'blur(10px)';
// });

banner.addEventListener('click', function(e){
    if( e.target == this ){
        modal.classList.remove('active');
        banner.style.backdropFilter = 'blur(10px)';
    }
});

// Alert

close.addEventListener('click', function(){
    alert.style.display = 'flex';
});
editclose.addEventListener('click', function(){
    alert.style.display = 'none';
});
keepedit.addEventListener('click', function(){
    alert.style.display = 'none';
});
discard.addEventListener('click', function(){
    alert.style.display = 'none';
    modal.classList.remove('active');
    banner.style.backdropFilter = 'blur(10px)';
});


alert.addEventListener('click', function(e){
    if(e.target == this){
        this.style.display = 'none';
    }
});