
/**
 * При движении мыши вызывается функция, которая меняет положение фона.
 * bgTree - элемент фона с деревом.
 * speed - константа, скорость того, как смешается фон.
 * x и y - координаты, на которые смещается фон
 */

document.addEventListener("mousemove", function(e) {
    const bgTree = document.getElementById("background-tree");
    const speed = 30;
    const x = (e.clientX / window.innerWidth * 10) - 15;
    const y = (e.clientY / window.innerHeight * 5) - 5;
    
    bgTree.style.transform = `translateX(${x}px) translateY(${y}px)`;
});