const search = document.querySelector('.header__search')
const btn = document.querySelector('.header__search-btn')
const input = document.querySelector('.header__search-field')
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

const btns = document.querySelectorAll('.main__counter-btn');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.main__counter-value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue -1 : 1;
        }

        inp.value = newValue;
    })
})