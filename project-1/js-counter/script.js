const countAddBtn = document.querySelector('#add');
const countSubtract  = document.querySelector('#subtract');
const counter = document.querySelector('h1');
countAddBtn.addEventListener('click',function(){
    counter.textContent++;
});
countSubtract.addEventListener('click',function(){
    counter.textContent--;
});