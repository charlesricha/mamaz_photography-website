//menu-btn

function menu_Display(){
    let btn = document.querySelector(".hamburger");
    let nav = document.querySelector(".navbar");
 
    if(nav.style.display === 'block'){
       nav.style.display ='none';
       btn.style.color = 'white';
 
    } else{
       nav.style.display = 'block';
       btn.style.color = 'orange';
    }
 
 }