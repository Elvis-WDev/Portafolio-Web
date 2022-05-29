
let draw_menu = document.getElementById("id_drawable_menu");
window.addEventListener('scroll', function(){

    let titletop = document.getElementById("titletop");
   
    let posicionObj = titletop.getBoundingClientRect().bottom;

    let tamañoPantalla = window.innerHeight / 3;

    
    if(posicionObj < tamañoPantalla){
        let header_1 = document.getElementById("head_back");
        header_1.style.cssText = "background-color: #000000;transition: all ease-out 1s;"
        let header_2 = document.getElementById("header_mobile");
        header_2.style.cssText = "background-color: #232323;opacity:0.9;transition: all ease-out 1s;"
        draw_menu.style.cssText = "opacity:1;";
        
        
    }

    if(posicionObj > tamañoPantalla){
        let header_1 = document.getElementById("head_back");
        header_1.style.cssText = "background-color: transparent;transition: all ease-out 1s;"
        let header_2 = document.getElementById("header_mobile");
        header_2.style.cssText = "background-color: #232323;opacity:0.9;transition: all ease-out 1s;"
        draw_menu.style.cssText = "opacity:0.9;";
    }

});
var aux_variable = 0;
var button_menu_drawable = document.getElementById('button_menu_drawable');
button_menu_drawable.addEventListener('click', function(){
    aux_variable = aux_variable + 1;
    if(aux_variable % 2 == 0){
        draw_menu.style.cssText = "display:none !important;";
    }else{
        draw_menu.style.cssText = "display:flex !important;";
    };
    
});

// window.addEventListener('scroll', reveal);

// function reveal(){

//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length ; i++){
       
//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');
//         }else{
//             reveals[i].classList.remove('active');
//         }


//     }
// };
//     var tag_section_2 = document.getElementById("tag_p_section2");
    
//     var header = document.getElementsByClassName("header");
//     window.addEventListener("touchmove", function(event){
//         if (this.scrollY >= 3000){
//              event.preventDefault();
//              this.scrollY = 3000;
//         } 
//    }, false);
// if(tag_section_2.classList.contains("reveal active")){
//     window.alert("Hola");
// }

