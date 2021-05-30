const API = 'https://api.covid19api.com/summary'

const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');
const para4 = document.getElementById('para4');
const para5 = document.getElementById('para5');
const para6 = document.getElementById('para6');
const date =  document.getElementById('date');
const cn = document.getElementById('cnt');


const input = document.getElementById('input');

const btn = document.getElementById('btn');


async function getdata() {
	const res = await fetch(API);
	const data = await res.json();

	console.log(data.Countries[76])
	para1.innerHTML = data.Countries[76].NewConfirmed;
	para2.innerHTML = data.Countries[76].TotalConfirmed;
	para3.innerHTML = data.Countries[76].NewRecovered;

	para4.innerHTML = data.Countries[76].TotalRecovered;
	para5.innerHTML = data.Countries[76].NewDeaths;
	para6.innerHTML = data.Countries[76].TotalDeaths;
	cn.innerHTML = data.Countries[76].Country;
}
getdata();

window.onload=getdata();

date.innerHTML = new Date();
