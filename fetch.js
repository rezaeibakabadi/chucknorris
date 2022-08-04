const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click',()=>{
    fetch(URL).then((data) => data.json())
    .then((response) => dispalyData(response))
    .catch((err) => console.log(err))
})



function dispalyData({value:joke}){
    img.classList.add('shake-img')
    // const {value:joke} = JSON.parse(data);
    content.textContent = joke ;
    const random = Math.random() * 500;
    setTimeout(()=>{
        img.classList.remove('shake-img')
    },random)
}