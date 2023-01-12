//your code here
const x= document.getElementById('evaluatedText')
x.addEventListener('keyup',display);
function display(){
	const head = document.getElementById('letterCount');
	head.innerHTML=x.value.length;
}




