// Text color : #85ff00
// Rows : .table-striped>tbody>tr:nth-of-type(odd) css[2][512].style.cssText = "background-color: #f9f9f9";
// Rows Color: 
const LOCATION = 1; //Modoulation 2 -> 1 ?
$(window).on('load', ()=>{
	var cssRuleCode = document.all ? 'rules' : 'cssRules'; //account for IE and FF
	$('.nav_title').remove();
	$('footer').remove();
	let css = document.styleSheets;
	console.log("CSS");
	//console.log(css[2].cssRules[512].style.backgroundColor);
	const list = Object.values(css);
	list.forEach(item => console.log(item.rules.length));
	$('body').css('background', 'black');
	$('body').css('color', 'yellow');

	$('.table-striped').removeClass("table-striped");
	$('#reportrange_right').css('background', 'rgb(0,0,0)');
	css[LOCATION].cssRules[2541].style.backgroundColor = "rgb(0,0,0)";
	css[LOCATION].cssRules[2357].style.backgroundColor = "rgb(0,0,0)";
	css[LOCATION].cssRules[538].style.backgroundColor = "rgb(0,0,0)";
	css[LOCATION].cssRules[72].style.background = "black";
	css[LOCATION].cssRules[72].style.backgroundColor = "black";
	css[LOCATION].cssRules[541].style.backgroundColor = "rgb(0,0,0)";
	css[LOCATION].cssRules[512].style.backgroundColor = "rgb(0, 0, 0)";
	css[LOCATION].cssRules[2399].style.backgroundColor = "rgb(0, 0, 0)";
	css[LOCATION].cssRules[3241].style.backgroundColor = "rgb(0, 0, 0)";
	css[LOCATION].cssRules[3259].style.backgroundColor = "rgb(0, 0, 0)";
	css[LOCATION].cssRules[512].cssText = `.table-striped > tbody > tr:nth-of-type(2n+1) { "background-color" : "#000000"}`;
	css[90].cssRules[5].style.background = "black"; //Modal Background 92 / 90 MOdulation?
});