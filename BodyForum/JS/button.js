function hideMenu() {
    const button = document.querySelector('.menu_toggle');
    button.addEventListener('click', function(event){
        event.preventDefault();
        const menu = document.querySelector("#main_menu");
        menu.classList.toggle("open");
    })
}

document.querySelector("#toggle_menu").addEventListener('click', hideMenu());

var list_is_visible = false;  

function hideList() {
    const button = document.querySelector("#toggle");
    const inner_list = document.querySelector(".inner-list");
      
    
    button.addEventListener("click",function() {
        if (list_is_visible === false) {
            inner_list.style.display = 'block'; 
             list_is_visible =  true;
             return list_is_visible
        }
        else {
            inner_list.style.display = 'none';
            list_is_visible = false;
            return list_is_visible;
        }
    })
}

document.querySelector("#toggle").addEventListener("click",hideList());