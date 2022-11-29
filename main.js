let inputEmail = document.querySelector('.form-control:first-child>input');
let spanEmail = document.querySelectorAll('.form-control:first-child>label>span');
let spanPassword = document.querySelectorAll('.form-control:nth-child(2)>label>span');
let inputPassword = document.querySelector('.form-control:nth-child(2)>input');

let body = document.querySelector('body').addEventListener('focusout', () => {
    spanEmail.forEach(element => {
        element.classList.remove('spanY', 'colorAdd')
        inputEmail.classList.remove('colorAdd')
        if (inputEmail.value !== "") {
            element.classList.add('spanY', 'colorAdd')
            inputEmail.classList.add('colorAdd')
        }
    });
    spanPassword.forEach(element => {
        element.classList.remove('spanY', 'colorAdd')
        inputPassword.classList.remove('colorAdd')
        if (inputPassword.value !== "") {
            element.classList.add('spanY', 'colorAdd')
            inputPassword.classList.add('colorAdd')
        }
    });
})

for (let i = 0; i < spanEmail.length; i++) {

    inputEmail.addEventListener('click', () => {
        spanEmail[i].classList.add('spanY', 'colorAdd')
        inputEmail.classList.add('colorAdd')
    });
}
for (let i = 0; i < spanPassword.length; i++) {

    inputPassword.addEventListener('click', () => {
        spanPassword[i].classList.add('spanY', 'colorAdd')
        inputPassword.classList.add('colorAdd')
    });
}