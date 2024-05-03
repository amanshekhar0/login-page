let signUp= document.querySelector('.sign-up')
let signIn = document.querySelector('.sign-in')
let tital = document.querySelector('.title')
let nameField = document.querySelector('.name-field')
let underLine = document.querySelector('.underline')

signIn.addEventListener('click',()=>{
    nameField.computedStyleMap.maxHeight='0';
})