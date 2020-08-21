const array=[1,2,5,6,3,7];
const num =4;


const f=(array,num)=>{
	let i=array[0];
	let j=num-i;
	let result=[];
	result=array.filter(num =>num===j);
	console.log `i=${i} j=${j} array is:${array}`;
	if (result.length===0 && array.length>1){
		result=f(array.slice(1,array.length),num);
	}
	if (result.length===1) {
		result.push(i);
	}
	return result;
	
}


f(array,num);


c