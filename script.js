var letter = document.querySelectorAll('LI');

letter.forEach((e)=>{
    e.addEventListener('click', function(){
            e.classList.toggle('active');
    });
});