const div = document.querySelector('#div');
div.addEventListener('mouseenter', function () {
    this.style.border = '1px solid black';
    this.style.backgroundColor = 'purple';
})

div.addEventListener('mouseleave', function () {
    this.style.border = '';
    this.style.backgroundColor = '';
})