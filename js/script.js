// Контроль приоритета слоев на triangle

var elements = {
    buttonLeft: document.querySelector('.triangle__button--left'),
    buttonCenter: document.querySelector('.triangle__button--center'),
    buttonRight: document.querySelector('.triangle__button--right'),

    triangleLeft: document.querySelector('.triangle-left'),
    triangleCenter: document.querySelector('.triangle-center'),
    triangleRight: document.querySelector('.triangle-right')

}

function priorityClean() {
    if (document.querySelector('.u-z-index-priority')) {
        document.querySelector('.u-z-index-priority').classList.remove("u-z-index-priority")
    }
}

elements.buttonLeft
.addEventListener('click',() => {
    priorityClean();
    elements.triangleLeft.classList.add("u-z-index-priority");
    elements.triangleLeft.classList.toggle("triangle-left--hover");
});

elements.buttonCenter
.addEventListener('click',() => {
    priorityClean();
    elements.triangleCenter.classList.add("u-z-index-priority");
    elements.triangleCenter.classList.toggle("triangle-center--hover");

    
    document.querySelectorAll('.triangle__button').forEach((el) => {
    document.querySelector(`.${el.classList[1]}`).classList.toggle('u-button-move-center');
    })
});

elements.buttonRight
.addEventListener('click',() => {
    priorityClean();
    elements.triangleRight.classList.toggle("triangle-right--hover");
    
    document.querySelectorAll('.triangle__button').forEach((el) => {
    document.querySelector(`.${el.classList[1]}`).classList.toggle('u-button-move-left');
    })
});


