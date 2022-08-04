const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click',()=>{
    getData(URL);
})

function getData(URL){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',URL);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState != 4 ) return;
        if(xhr.status = 200){
            img.classList.add('shake-img')
            const {value:data} = JSON.parse(xhr.responseText);
            content.textContent = data ;
            const random = Math.random() * 500;
            setTimeout(()=>{
                img.classList.remove('shake-img')
            },random)
        }else{
            console.log({
                status: xhr.status,
                text: xhr.statusText
            });
        }
    }
}