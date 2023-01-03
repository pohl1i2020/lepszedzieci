const addElementbtn = document.querySelector('button')
const h1=document.querySelector('h1');
const display = document.querySelector('#Display');

let iter = 1

function addElement(){
    const element =document.createElement('p')
    element.innerHTML = `Nowy element ${iter}`;
    element.style.color = '#f00';
    element.style.backgroundColor = '#ff0';
    element.addEventListener('click', function(){
        this.remove();
        this.style.color = '#0ff'
    })


    display.appendChild(element)
    iter++;
}


addElementbtn.addEventListener('click', addElement)
h1.addEventListener('click', function(){
    console.log(this)
    this.style.color = '#0ff'
}) 