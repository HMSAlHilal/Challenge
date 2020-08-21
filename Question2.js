let btn=document.getElementById("btn");
let arrText=document.getElementById("arrText");
let numText=document.getElementById("numText");
let result=document.getElementById("result");

const f=(array,num)=>{
	let i=array[0];
	let j=num-i;
	let result=[];
	array.shift();
	result=array.filter((num,i) =>num===j);
	console.log `i=${i} j=${j} array is:${array}`;
	if (result.length===0 && array.length>1){
		result=f(array,num);
	}
	if (result.length===1) {
		result.unshift(i);
	}
	return result;
	
}

const mainfunction=()=>{

	let array = arrText.value.split(",").map(n=>Number(n));
	console.log(array);
	let num=Number(numText.value);
	let answer=f(array,num);
	console.log(answer);
	if(answer.length>0){


	result.innerText="Answer is: "+answer;
	}

	else{
		result.innerText="Ther is no answer";
	}
}

btn.addEventListener("click", function(){mainfunction()});