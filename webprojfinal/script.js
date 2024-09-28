const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('.textarea');
const btn = document.querySelector('.btn');
emoji.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('emoji')) {
        // Toggle the textarea active class
        textarea.classList.toggle('textarea--active');
        btn.classList.toggle('btn--active');
    }
});

container.addEventListener('mouseleave', () => {
    textarea.classList.remove('textarea--active');
    btn.classList.remove('btn--active');
});
