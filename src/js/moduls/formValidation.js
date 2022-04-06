const formValidation = () => {
    const inputName = document.getElementById('inputLogin'),
        inputPassword = document.getElementById('inputPass');
        
    const isCorrectUsermailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        isCorrectUserpassRegExp = /^\s*$/;
    

    let flag = true;
    
    inputPassword.addEventListener('input', () => {
        inputPassword.classList.remove('input-error');
    })

    inputName.addEventListener('input', () => {
        inputName.classList.remove('input-error');
    })

    if (!isCorrectUsermailRegExp.test(inputName.value)) {
        inputName.classList.add('input-error');
        flag = false;
    }
    if (isCorrectUserpassRegExp.test(inputPassword.value)) {
        inputPassword.classList.add('input-error');
        flag = false;
    }

    return flag;
}


export default formValidation;