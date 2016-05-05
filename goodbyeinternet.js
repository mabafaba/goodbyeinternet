
function selfdestruct(){
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}





test = $('#goodbyeinternet').html();

// test = "1 2 3 4 5 6 7 8 9 0"
for(var i=0;i<=1;i++)
{
	a = parseInt(Math.random()*test.length);
	b = parseInt(Math.random()*test.length);
if(test[a] != '<' & test[a] != '>' & test[b] != '<' & test[b] != '>' ){
aletter = test[a];
test = test.replaceAt(a, test[b]);
test = test.replaceAt(b,aletter);
	console.log(test);

$('#goodbyeinternet').html(test);
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