
// selfdestruct():
	// switches two characters in the html code
	// then waits for a random amount of time
	// then the function calls itself

// parameters:
	// mutationrate:
		// the maximum time in seconds to wait to repeat mutation
	// severity: integer 1,2 or 3 for 3 levels of severity
 		// 0: only affects the content of element with id 'goodbyeinternet'
 		// 1: affects everything in <body></body>
 		// 2: affects entire html top to bottom. Should obviously be the default.


// list of object from which one is destroyed based on severity level.
what_to_destruct = ['#goodbyeinternet','body','html'];

function selfdestruct(severity = 1,mutationrate= 5){
console.log(what_to_destruct[severity]);
html_source = $(what_to_destruct[severity]).html();

// loop not in use; could switch more than one pair of characters per mutation
for(var i=0;i<=0;i++)
{
	a = parseInt(Math.random()*html_source.length);
	b = parseInt(Math.random()*html_source.length);
if(html_source[a] != '<' & html_source[a] != '>' & html_source[b] != '<' & html_source[b] != '>' ){
aletter = html_source[a];
html_source = html_source.replaceAt(a, html_source[b]);
html_source = html_source.replaceAt(b,aletter);
// console.log(html_source);

$(what_to_destruct[severity]).html(html_source);
}
}


setTimeout(function(){
selfdestruct()
}, Math.random()*1000);
}


$( document ).ready(function(){

setTimeout(
	function(){
		selfdestruct();
		}, 
		Math.random()*5000);

});


// custom function to replace characters in strings:
// credit to StackOverflow user Cem Kalyoncu
// http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript 
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}