function hideMenu() {
    const button = document.querySelector('.menu_toggle');
    button.addEventListener('click', function(event){
        event.preventDefault();
        const menu = document.querySelector("#main_menu");
        menu.classList.toggle("open");
    })
}

document.querySelector("#toggle_menu").addEventListener('click', hideMenu());