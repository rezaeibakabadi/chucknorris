const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
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
            const {value:data} = JSON.parse(xhr.responseText);
            content.textContent = data ;
        }else{
            console.log({
                status: xhr.status,
                text: xhr.statusText
            });
        }
    }
}