//alert('hello')

const input = document.getElementById('input');

const btn = document.getElementById('btn');

const API_KEY = '6ca22c629cc9486087a9fe12b10c0e33';

const card = document.getElementById('card');

const para = document.getElementById('para');

const img = document.getElementById('img');



btn.addEventListener('click',(e)=>{

	getdata(input.value);
	e.preventDefault();

})

async function getdata(){
	//alert('hello')

	const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${input.value}&apiKey=${API_KEY}`);
	const data = await res.json();
	generatehtml(data.articles);

	/*card.innerHTML=data.articles[0].title;
	para.innerHTML=data.articles[0].description;*/

}

function generatehtml(results){
	showHTML='';
	results.map(result=>{

		showHTML+=` <div class="col s12 m4 l4">
    <div class="card blue-grey darken-1">
      <div class="card">
        <div class="card-image">
          <img src=${result.urlToImage}>
        </div>

            <div class="card-content dark-text">
          <span class="card-title" style="font-weight: bold;font-size: 1.5rem;font-style: italic; text-align: center;">${result.title}</span>
          <p style="font-size: 1rem; text-align: center;">${result.description}</p>
        </div>
        <div class="card-action">
          <a href=${result.url} style="color:green;text-align: center;font-weight: 600;font-size: 1rem;">Know More Details</a>
        </div>
      </div>
      </div>
    </div>
`
      document.getElementById('main4').innerHTML=showHTML;
	})
}

async function loaddata(){

	const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
	const data = await res.json();
	generatehtml(data.articles);

}

function generatehtml(results){
	showHTML='';
	results.map(result=>{

		showHTML+=` 

<div class="col s12 m4 l4">
<div class="card blue-grey darken-1">
      <div class="card">
        <div class="card-image">
          <img src=${result.urlToImage}>
        </div>

            <div class="card-content dark-text">
          <span class="card-title" style="font-weight: bold;font-size: 1.5rem;font-style: italic; text-align: center;">${result.title}</span>
          <p style="font-size: 1rem; text-align: center;">${result.description}</p>
        </div>
        <div class="card-action">
          <a href=${result.url} style="color:green;text-align: center;font-weight: 600;font-size: 1rem;">Know More Details</a>
        </div>
      </div>
      </div>
    </div>
`
      document.getElementById('main4').innerHTML=showHTML;
	})
}

window.onload=loaddata();