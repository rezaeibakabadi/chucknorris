const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click',async ()=>{
    try {
       const data = await fetch(URL);
    const response = await data.json();
    dispalyData(response); 

    } catch (error) {
        console.log(error);
        
    }
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