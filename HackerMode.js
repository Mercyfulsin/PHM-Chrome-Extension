// Text color : #85ff00
// Rows : .table-striped>tbody>tr:nth-of-type(odd) css[2][512].style.cssText = "background-color: #f9f9f9";
// Rows Color: 
$(window).on('load', ()=>{
	var cssRuleCode = document.all ? 'rules' : 'cssRules'; //account for IE and FF
	let css = document.styleSheets;
	console.log("CSS");
	//console.log(css[2].cssRules[512].style.backgroundColor);
	console.log(css);
	css[2].cssRules[2541].style.backgroundColor = "rgb(0,0,0)";
	css[2].cssRules[512].style.backgroundColor = "rgb(0, 0, 0)";
	css[2].cssRules[512].cssText = `.table-striped > tbody > tr:nth-of-type(2n+1) { "background-color" : "#000000"}`;
});