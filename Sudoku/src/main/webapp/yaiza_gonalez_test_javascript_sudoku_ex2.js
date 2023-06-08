/**
 * 
 */
function F21(A){
	if(A.length !== 9){
		return false;
	}
}

const numberSet = new Set(A);
if( numberSet !== 9 ){
	return false;
}
for(let i = 0; i<A.length; i++){
	const position = A[i];
	if(typeof position!== 'number'|| position< 1 || position>9){
		return false;
	}
}
return true;

