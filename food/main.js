/**
 * Создание анимаций с помощью GSAP.
 */
/**
 * Создание таймлайна для последовательных анимаций.
 */
const tl = gsap.timeline()
/**
 * Анимация на таймлайне для элементов: .front-photo, .t1, .t3, .t2, .logo1, .mynavbar1 li, .searching.
 */
tl.fromTo('.front-photo', {
    x: 100,
    opacity: 1,
    rotate: 0,
    duration: 1
}, {
    x: 0,
    opacity: 1,
    duration: 1,
    rotate: 0

}).fromTo('.t1', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1
},
1
).fromTo('.t3', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1
}).fromTo('.t2', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1
}).fromTo('.logo1', {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1
},
3).fromTo('.mynavbar1 li', {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15
}).fromTo('.searching', {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1,
})
/**
 * Подключение плагина ScrollTrigger.
 */
gsap.registerPlugin(ScrollTrigger);

/**
 * Скроллинг анимации для элемента .front-text с использованием ScrollTrigger.
 */
gsap.to('.front-text', {
    scrollTrigger: {
        trigger: '.header1',
        start: 'top top ',
        scrub: true,
    },
    yPercent: 10,
     scale: 0.5, 
     xPercent: -80,
     opacity: 0,
})
/**
 * Скроллинг анимации для элемента .front-photo с использованием ScrollTrigger.
 */
gsap.to('.front-photo', {
    scrollTrigger: {
        trigger: '.header1',
        start: 'top top ',
        scrub: true,
    },
     xPercent: -80,
     rotate: 180
})
/**
 * Анимация появления карточек .card с использованием ScrollTrigger.
 */
gsap.from('.card', {
    scrollTrigger: {
        trigger: '.cards', 
        start: '5% center',
        end: '+=300px',
        scrub: true
    },
    scale: 0,
    opacity: 0,
    travsformOrigin: 'left bottom',
    ease: 'none',
    stagger: 1,
    duration: 1
})
/**
 * Скроллинг анимации для элемента .eat-title с использованием ScrollTrigger.
 */
gsap.from('.eat-title', {
    scrollTrigger: {
        trigger: '.cards', 
        start: '5% center',
        end: '+=300px',
        scrub: true
    },
    scale: 0,
    opacity: 0,
    travsformOrigin: 'top bottom',
    ease: 'none',
    stagger: 1,
    duration: 1
})
/**
 * Скроллинг анимации для элемента .img-parr с использованием ScrollTrigger.
 */
gsap.to('.img-parr', {
    scrollTrigger: {
        trigger: '.sh',
        scrub: true,
    },
    yPercent: -10,
})
/**
 * Скроллинг анимации для элемента .text-parr с использованием ScrollTrigger.
 */
gsap.to('.text-parr', {
    scrollTrigger: {
        trigger: '.sh',
        scrub: true,
    },
    yPercent: 15,
})
/**
 * Константа, содержащая в себе массив элементов .imgPack.
 */
const items = gsap.utils.toArray('.imgPack')
/**
 * Скроллинг анимации для константы items с использованием ScrollTrigger.
 */
gsap.to( items, {
    scrollTrigger: {
        trigger: '.photos',
        start: '-30% center',
        scrub: true,
    },
    xPercent: -250,
})
/**
 * Обработчик нажатия кнопки поиска.
 * Функция производит поиск слова на карточке.
 * При удачном поиске слово выделяется желтым цветом,
 * при отсутствии найденного слова карточки остаются без изменений.
 */
document.getElementById('btn1').addEventListener('click', function() {
    removeHighlights();

    let searchText = document.getElementById('search1').value.trim().toLowerCase();
    let cards = document.getElementsByClassName('card');

    Array.from(cards).forEach(card => {
        let cardText = card.textContent.toLowerCase();
        let found = false;
        
        if (searchText) {
            if (cardText.includes(searchText)) {
                let regex = new RegExp(searchText, 'gi');
                card.innerHTML = card.innerHTML.replace(regex, match => `<span style="background-color: yellow">${match}</span>`);
                found = true;
            }
        } else {
            found = true; 
        }
        
        if (found) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'block'; 
        }
    });
});
/**
 * Удаление подсветок в карточках при новом поиске.
 */
function removeHighlights() {
    let highlighted = document.querySelectorAll('span[style="background-color: yellow"]');
    highlighted.forEach(el => {
        el.outerHTML = el.innerHTML;
    });
}
/**
 * Обработчик события нажатия клавиши Enter в поле поиска.
 */
let searchInput = document.getElementById('search1');
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('btn1').click();
    }
});