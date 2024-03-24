var menu = document.getElementById("menu");
var menu_icon = document.getElementById("menu-icon");
var menu_close_icon = document.getElementById("menu-close-icon");

menu_icon.onclick = function(){
    if(menu.style.display = "none"){
        menu_icon.style.visibility ="hidden";
        menu_close_icon.style.visibility ="visible";
        menu.style.display ="block";       
    }
    
};

menu_close_icon.onclick = function(){
    if(menu.style.display = "block"){   
        menu_close_icon.style.visibility ="hidden"; 
        menu_icon.style.visibility ="visible";
        menu.style.display ="none"; 
       
              
    }
};