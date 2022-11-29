let inputEmail = document.querySelectorAll('.form-control:first-of-type>input:first-of-type');
let spanEmail = document.querySelectorAll('.form-control:first-of-type>label:first-of-type>span');
let spanPassword = document.querySelectorAll('.form-control:nth-child(2)>label>span');
let inputPassword = document.querySelectorAll('.form-control:nth-child(2)>input')


for (let i = 0; i < spanEmail.length; i++) {
    inputEmail.forEach(element => {
        element.addEventListener('click', () => {
            spanEmail[i].classList.add('spanY')
        })
    });
}

for (let i = 0; i < spanPassword.length; i++) {
    inputPassword.forEach(element => {
        element.addEventListener('click', () => {
            spanPassword[i].classList.add('spanY')
            
        })
    });
}



document.addEventListener('click', function(event) {
    var isClickInsideElement = inputEmail.contains(event.target);
    if (!isClickInsideElement) {
        //Do something click is outside specified element
    }
});