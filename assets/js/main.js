const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const violetteBtn = document.querySelector('.violette')
for (let index = 0; index < buttons.length; index++) {
    const buttonItem = buttons[index];

    buttonItem.addEventListener('click', function (e) {
        const $node =  this.dataset.color

        $node == 'red' ?  body.style.backgroundColor = 'red' :  ''

        $node == 'orange' ?  body.style.backgroundColor = 'orange' : ''

        $node == 'yellow' ?  violetteBtn.innerText = `Был сделан клик по кнопке ${this.innerText}` : violetteBtn.innerText = 'Фиолетовый'


        $node == 'green' ? changeBg('green') : 'Нету';
    });

}

const changeBg = (id) => {
    const button = document.querySelectorAll('.button')
    for (let index = 0; index < buttons.length; index++) {
        const buttonItem = buttons[index];
        console.log( buttonItem ==  'gre')
    }
}