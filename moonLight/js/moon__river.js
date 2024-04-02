const ruLabel = document.getElementById('RU');
const enLabel = document.getElementById('EN');
const text = document.querySelectorAll('p');
const label = document.querySelectorAll('label');    
const link__text = document.querySelectorAll('a');
const input__email = document.querySelector('#email');
function translate( i, content, translate__text){
    let text_content = i.textContent;
    if( text_content === content){
        i.textContent = translate__text;
    }
};
function translate_link( i, content, translate__text){
    let text_content = i.innerText;
    if( text_content === content){
        i.innerText = translate__text;
    }};
function translate_back( i, translate__text, content){
        let text_content = i.textContent;
        if( text_content === content){
            i.textContent = translate__text;
        }
    };
function translate_link_back( i, translate__text, content){
        let text_content = i.innerText;
        if( text_content === content){
            i.innerText = translate__text;
        }};
enLabel.addEventListener('click', () => {
 input__email.value = 'Enter your E-mail';
 if(enLabel.checked){
    for( let i of text){
        translate(i, 'Смотреть коллекцию', 'Look at a collection');
        translate(i, 'КОЛЬЦО TRINITY, Cartier', 'RING TRINITY, CARTIER');
        translate(i, 'Белое золото, бриллианты', 'White gold , diamonds');
        translate(i, 'для кого', 'FOR WHOM');
        translate(i, 'Категории', 'CATEGORIES');
        translate(i, 'материал', 'MATERIAL');
        translate(i, 'бренд', 'BREND');
        translate(i, 'Новая коллекция by Mercury', 'New collection by Mercury');
        translate(i, 'Cмотреть коллекцию', 'Look at a collection');
        translate(i, 'телефон горячей линии', 'THE PHONE HOTLINE');
        translate(i, 'подпишитесь на новости', 'SUBSCRIBE TO THE NEWS');
    }
for(let i of label){
    translate(i, 'Ювелирные изделия', 'JEWELLERY');
    translate(i, 'часы', 'WATCH');
    translate(i, 'ароматы', 'FLAVORS');
    translate(i, 'бренды', 'BRANDS');
    translate(i, 'изделия из кожи', 'LEATHER GOODS');
    translate(i, 'Свадебные украшения', 'BRIDAL JEWELRY');
    translate(i, 'другое', 'ANOTHER');
};
for(let i of link__text){
    translate_link(i, 'Для женщин', 'For women');
    translate_link(i, 'Для мужчин', 'For men');
    translate_link(i, 'Для детей', 'For kids');
    translate_link(i, 'Кольца', 'Rings');
    translate_link(i, 'Браслеты', 'Wristbands');
    translate_link(i, 'Колье', 'Necklace');
    translate_link(i, 'Серьги', 'Earrings');
    translate_link(i, 'Броши', 'Brooches');
    translate_link(i, 'Изделия с бриллиантами', 'Jewelry with the diamonds');
    translate_link(i, 'Желтое золото', 'Yellow gold');
    translate_link(i, 'Белое золото', 'White gold');
    translate_link(i, 'Розовое золото', 'Pink gold');
    translate_link(i, 'Показать все бренды', 'Show all brands');
}
 };
});
ruLabel.addEventListener('click', () => {
    input__email.value = 'Введите E-mail';
    if(ruLabel.checked){
       for( let i of text){
           translate_back(i, 'Смотреть коллекцию', 'Look at a collection');
           translate_back(i, 'КОЛЬЦО TRINITY, Cartier', 'RING TRINITY, CARTIER');
           translate_back(i, 'Белое золото, бриллианты', 'White gold , diamonds');
           translate_back(i, 'для кого', 'FOR WHOM');
           translate_back(i, 'Категории', 'CATEGORIES');
           translate_back(i, 'материал', 'MATERIAL');
           translate_back(i, 'бренд', 'BREND');
           translate_back(i, 'Новая коллекция by Mercury', 'New collection by Mercury');
           translate_back(i, 'Cмотреть коллекцию', 'Look at a collection');
           translate_back(i, 'телефон горячей линии', 'THE PHONE HOTLINE');
           translate_back(i, 'подпишитесь на новости', 'SUBSCRIBE TO THE NEWS');
       }
   for(let i of label){
       translate_back(i, 'Ювелирные изделия', 'JEWELLERY');
       translate_back(i, 'часы', 'WATCH');
       translate_back(i, 'ароматы', 'FLAVORS');
       translate_back(i, 'бренды', 'BRANDS');
       translate_back(i, 'изделия из кожи', 'LEATHER GOODS');
       translate_back(i, 'Свадебные украшения', 'BRIDAL JEWELRY');
       translate_back(i, 'другое', 'ANOTHER');
   };
   for(let i of link__text){
       translate_link_back(i, 'Для женщин', 'For women');
       translate_link_back(i, 'Для мужчин', 'For men');
       translate_link_back(i, 'Для детей', 'For kids');
       translate_link_back(i, 'Кольца', 'Rings');
       translate_link_back(i, 'Браслеты', 'Wristbands');
       translate_link_back(i, 'Колье', 'Necklace');
       translate_link_back(i, 'Серьги', 'Earrings');
       translate_link_back(i, 'Броши', 'Brooches');
       translate_link_back(i, 'Изделия с бриллиантами', 'Jewelry with the diamonds');
       translate_link_back(i, 'Желтое золото', 'Yellow gold');
       translate_link_back(i, 'Белое золото', 'White gold');
       translate_link_back(i, 'Розовое золото', 'Pink gold');
       translate_link_back(i, 'Показать все бренды', 'Show all brands');
   }
    };
   });
   input__email.addEventListener('click', () => {
    input__email.value = '';
   });
    const border = document.querySelector('.border')
   const in_burger = document.querySelector('.in__burger');
   const in_burger_buton__on = document.querySelector('.menu__burg');
   const in_burger_buton__off = document.querySelector('.menu__burg2');
   in_burger_buton__on.addEventListener('click',  () => {
    in_burger.classList.add('active');
    in_burger.classList.remove('pasive');
    border.classList.add('off');
   });
   in_burger_buton__off.addEventListener('click',  () => {
    in_burger.classList.remove('active')
    in_burger.classList.add('pasive');
    border.classList.remove('off');
   });
   const card = document.querySelector(".card");
   const map = document.querySelector("#map");
   let startx;
   let starty;
   let finishx;
   let finishy;
   let x;
   let y;
    map.addEventListener('mouseover', (event) => {
        map.addEventListener('mousedown', (event) => {
            startx = event.clientX;
            starty = event.clientY;
            map.addEventListener('mousemove', mousemoveHandler);
            event.preventDefault();
        });
    })
    map.addEventListener('mouseout', (event) => {
    document.removeEventListener('mousemove', mousemoveHandler);
    finishx = x;
    finishy = y;
    startx = undefined;
    starty = undefined;
    })
  function mousemoveHandler(e) {
    if (e.button === 0){
        if(startx !== undefined && starty !== undefined){
            if(finishx === undefined){
                finishx = 0;
            };
            if(finishy === undefined){
      finishy = 0;
            };
             x =  finishx + e.clientX - startx;
             y =  finishy + e.clientY - starty;
        if (x < -189) {
            x = -189;
          } else if (x > 189) {
            x = 189;
          }
          if (y < -14.5) {
            y = -14.5;
          } else if (y > 14.5) {
            y = 14.5;
          }
          map.style.transform = `translate(${x}px, ${y}px)`;
          if(e.button === 1){
              return;
          }  
        }
  }};
  map.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', mousemoveHandler);
    finishx = x;
    finishy = y;
    startx = undefined;
    starty = undefined;
  });
let bodka = document.querySelectorAll('.slider_bodka');
let bodka_counter = 0;
let slider = document.querySelector('.slider'); 
let sliderImages1 = document.getElementsByClassName('slider1'); // Вибір всіх слайдерів
let sliderImages2 = document.getElementsByClassName('slider2'); // Вибір всіх слайдерів
let sliderImages3 = document.getElementsByClassName('slider3'); // Вибір всіх слайдерів
let sliderWidth = 356; // Припускаючи, що ширина кожного слайдера 356px 
let sliderCounter = 0;
let counter_clonr = 1;
let counter_clonl = 1;
function updateSliderPositions() {
    for(let i of sliderImages1){
        i.style.transform = `translate(${sliderCounter * sliderWidth}px, 0px)`;
    };
   
   
      sliderImages2[0].style.transform = `translate(${sliderCounter * sliderWidth}px, 0px)`;
      sliderImages3[0].style.transform = `translate(${sliderCounter * sliderWidth}px, 0px)`;
    
  }
document.addEventListener('click', function(e){

    if(e.target.closest('#right')){
        sliderCounter--;
        if( sliderCounter < 0 && sliderCounter % 5 === 0){
counter_clonr++;
            let clonedImage = sliderImages1[0].cloneNode(true);
            clonedImage.style.position = 'absolute';
            clonedImage.style.left = `${5*counter_clonr * sliderWidth 
             }px`;
            slider.appendChild(clonedImage);

        }
       
        updateSliderPositions();
                
        bodka_counter ++;
        if(bodka_counter > 4){
            bodka_counter = 0;
        };
        bodka[bodka_counter].classList.add('slider_bodka_active');

        if(bodka[bodka_counter - 1 ]){
       
        if (bodka[bodka_counter - 1].classList.contains("slider_bodka_active")) {
            bodka[bodka_counter - 1].classList.remove('slider_bodka_active');
          };
        };
    
        
if(!bodka[bodka_counter - 1 ]){
    bodka[4].classList.remove('slider_bodka_active');
};
    }





    if(e.target.closest('#left')){
        sliderCounter++;
        if( sliderCounter > 0 && sliderCounter % 5 === 0){
            counter_clonl++;
                        let clonedImage = sliderImages1[0].cloneNode(true);
                        clonedImage.style.position = 'absolute';
                        clonedImage.style.left = `${-5*counter_clonl * sliderWidth 
                         }px`;
                        slider.appendChild(clonedImage);}

        updateSliderPositions();
          
        
        bodka_counter --;
        if(bodka_counter  < 0){
            bodka_counter = 4;
        }
        bodka[bodka_counter].classList.add('slider_bodka_active');

if(bodka[bodka_counter + 1 ]){
        if (bodka[bodka_counter + 1].classList.contains("slider_bodka_active")) {
            bodka[bodka_counter + 1].classList.remove('slider_bodka_active');
          };   
    };

if(!bodka[bodka_counter + 1 ]){bodka[0].classList.remove('slider_bodka_active');};

}
});
  