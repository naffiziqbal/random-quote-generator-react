const loadData =async (quote_id)=> {
    const url = `https://breakingbadapi.com/api/quotes/${quote_id}`;
    const res = await fetch(url)
    const data = await res.json();
    displayData(data[0])
}

const displayData = (id)=>{
    const dataContainer = document.getElementById('display-data');
    dataContainer.innerHTML = ``;
    const showData = document.createElement('div');
    showData.innerHTML = `
    <h3 class = 'quote'>${id?.quote ? id.quote : 'Try Refreshing Again'}</h3>
    <h4>${id.author}</h4>
    `;
    dataContainer.appendChild(showData)
}

function randomID(){
 let randomNum =    parseInt(Math.random() * 100);
 if(randomNum > 30 &&randomNum < 63){
 randomNum = randomNum  /  3 ;
 randomNum = parseInt(randomNum)
 }
//  console.log(randomNum)
 return randomNum
}
loadData(randomID())
