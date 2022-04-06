const accordion = () => {
    const accItem = document.querySelectorAll('.faq__list__item');

    accItem.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('faq__item_close');
            [...item.children].forEach(child => {
                if (child.classList.contains('faq__list__content')) {
                    child.classList.toggle('open');
                    if (child.classList.contains('open')) {
                        child.style.maxHeight = child.scrollHeight + 'px';
                    }else {
                        child.style.maxHeight = null;
                    }
                }
            })
        })
    });

}

export default accordion;

