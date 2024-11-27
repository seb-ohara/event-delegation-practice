document.querySelector('#container').addEventListener('click', function(listClick){
    
    console.log(listClick.target.getAttribute('id') + ' was clicked');

    const target = listClick.target;
    if(target.matches('ul')){
        target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    
})