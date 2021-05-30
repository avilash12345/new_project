const API_KEY = '21551444-4c11d771dd969438927f44297';

//alert('hello')


const input = document.getElementById('input');
const btn = document.getElementById('btn');


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    getdata(input.value);

});


async function getdata(){

	const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${input.value}&image_type=photo`);
	const data = await res.json();

	//console.log(data.hits)

	showHTML='';

	data.hits.map(result=>{
		console.log(result)

		showHTML+=`
	
<div class="col s12 m4 l4">
      <div class="card">
        <div class="card-image">
          <img src=${result.previewURL}>
        </div>
        <div class="card-action">
          <a href=${result.largeImageURL}  style="color:green;text-align: center;font-weight: 600;font-size: 1rem;">Download Photos</a>
        </div>
      </div>
    </div>

		`
	})

	document.getElementById('main1').innerHTML = showHTML;

}


//default load
async function loaddata(){

	const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=flowers&image_type=photo`);
	const data = await res.json();

	//console.log(data.hits)

	showHTML='';

	data.hits.map(result=>{
		console.log(result)

		showHTML+=`
		<div class="col s12 m4 l4">
      <div class="card">
        <div class="card-image">
          <img src=${result.previewURL}>
        </div>
        <div class="card-action">
          <a href=${result.largeImageURL}  style="color:green;text-align: center;font-weight: 600;font-size: 1rem;">Download Photos</a>
        </div>
      </div>
    </div>

		`
	})

	document.getElementById('main1').innerHTML = showHTML;

}

window.onload = loaddata();
