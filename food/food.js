const input = document.getElementById('input');
const Btn = document.getElementById('btn');

const APP_ID='87b091ec';
const APP_KEY='c42139ac100c6eab7d76a94b91db5c36';

var cors_api_host = 'cors-anywhere.herokuapp.com';


Btn.addEventListener('click',(e)=>{
    e.preventDefault();
    getdata();

})

async function getdata(){

	const res = await fetch(`https://api.edamam.com/search?q=${input.value}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await res.json();

	console.log(data.hits[0])

generatehtml(data.hits);
   
}

function generatehtml(results){
	showHTML='';

	results.map(result=>{
		showHTML+=` 

<div class="col s12 m4 l4">
      <div class="card">
        <div class="card-image">
          <img src=${result.recipe.image}>
        </div>
        <div class="card-content white-text">
          <span class="card-title" style="font-weight:bold; color:#009933;">${result.recipe.label}</span>
          <h6 style="font-weight:500; color: #ff0066;">Calories:${result.recipe.calories}</h6>
        </div>
        <div class="card-action">
          <a href=${result.recipe.url} style="color:green;text-align: center;font-weight: 600;font-size: 1rem;">Get Recipes</a>
        </div>
      </div>
    </div>

`



      document.getElementById('main3').innerHTML=showHTML;
	})
}

async function loaddata(){

  const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&to=9`);
  const data = await res.json();

  console.log(data.hits[0])

generatehtml(data.hits);
   

}

function generatehtml(results){
  showHTML='';

  results.map(result=>{
    showHTML+=` <div class="col s12 m4 l4">
      <div class="card">
        <div class="card-image">
          <img src=${result.recipe.image}>
        </div>
        <div class="card-content white-text">
          <span class="card-title" style="font-weight:bold; color:#009933;">${result.recipe.label}</span>
          <h6 style="font-weight:500; color: #ff0066;">Calories:${result.recipe.calories}</h6>
        </div>
        <div class="card-action">
          <a href=${result.recipe.url} style="color:green;text-align: center;font-weight: 600;font-size: 1rem;">Get Recipes</a>
        </div>
      </div>
    </div>`



      document.getElementById('main3').innerHTML=showHTML;
  })
}

window.onload=loaddata();






