const toggleIcon = document.getElementById('toggle');
let toggle=0;
toggleIcon.addEventListener('click', () => {
    if (toggle === 0) {
        toggleIcon.classList.remove('bx-toggle-left');
        toggleIcon.classList.add('bxs-toggle-right');
        document.body.classList.toggle('dark_mode');
        toggle = 1;
    } else {
        toggleIcon.classList.remove('bxs-toggle-right');
        toggleIcon.classList.add('bx-toggle-left');
        document.body.classList.toggle('dark_mode');
        toggle = 0;
    }
});
