import formValidation from './formValidation.js'

const modal = () => {
    const regModal = document.getElementById('reg'),
        thxModal = document.getElementById('thx'),
        loginModal = document.getElementById('login'),
        loginBtn = document.getElementById('button-auth'),
        regBtn = document.getElementById('button-reg'),
        outBtn = document.getElementById('button-out'),
        loginSubmit = document.getElementById('loginSubmit'),
        regSubmit = document.getElementById('regSubmit'),
        inputLogin = document.getElementById('inputLogin'),
        inputPass = document.getElementById('inputPass'),
        overlay = document.querySelector('.overlay'),
        userName = document.querySelector('.user-name'),
        ctaButtons = document.querySelectorAll('.main .button-cta');
        
    const close = (modal) => {
        modal.classList.add('close__modal');
        overlay.classList.add('hidden');    
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('close__modal');
        }, 300);
    }

    const open = (modal) => {
        modal.classList.add('open__modal');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    const login = (user) => {
        loginBtn.classList.add('hidden');
        regBtn.classList.add('hidden');
        outBtn.classList.remove('hidden');
        userName.textContent = user.mail;
        document.querySelector('.main').innerHTML = '<p class="container section-title">Спасибо</p>';
        close(loginModal);
    }
    
    const logout = () => {
        loginBtn.classList.remove('hidden');
        regBtn.classList.remove('hidden');
        outBtn.classList.add('hidden');
        userName.textContent = '';
        localStorage.removeItem('user');
        window.location.href = '/'
    }

    outBtn.addEventListener('click', () => {
        logout();
    })

    regSubmit.addEventListener('click', e => {
        e.preventDefault();
        close(regModal);
        open(thxModal)
        setTimeout(() => {
            close(thxModal);
        }, 1500);
    })


    loginSubmit.addEventListener('click', e => {
        e.preventDefault();
        const user = {
            mail: inputLogin.value.trim(),
            pass: inputPass.value.trim()
        }
        if (formValidation()) {
            localStorage.setItem('user', JSON.stringify(user)); 
            login(user);
        }

    })

    localStorage.getItem('user') ? login(JSON.parse(localStorage.getItem('user'))) : '';

    // opens modal login
    loginBtn.addEventListener('click', () => {
        open(loginModal);
        loginModal.querySelector('.close').addEventListener('click', () => {
            close(loginModal);
        });
        loginModal.querySelector('.alt > .button').addEventListener('click', () => {
            close(loginModal);
            regBtn.click();
        })
        
        overlay.addEventListener('click', () => {
            close(loginModal);
        })
    });
    // opens modal registration
    regBtn.addEventListener('click', () => {
        open(regModal);
        regModal.querySelector('.close').addEventListener('click', () => {
            close(regModal);
        });
        regModal.querySelector('.alt > .button').addEventListener('click', () => {
            close(regModal);
            loginBtn.click();
        })
        
        overlay.addEventListener('click', () => {
            close(regModal)
        })
    });
    // opens modal registration
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            regBtn.click();
        })
    })
}


export default modal;