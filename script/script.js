(() => {
    function ShowManue(burger) {
        burger = document.querySelector(burger);
        burger.addEventListener('click', () => {
         const  elem = document.querySelector('.header__nav');
         
            elem.classList.toggle('showeMenu');
            console.log(elem);
            
        })
        
        
    }
    ShowManue('.burger')
})()
