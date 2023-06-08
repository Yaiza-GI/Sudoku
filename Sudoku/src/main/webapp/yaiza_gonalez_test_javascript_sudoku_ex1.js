/**
 * 
 */
//import "test_je1.js";

let to_verify = new Array(9);
for (var i = 0; i < to_verify.length; ++i) {
  to_verify[i] = new Array(9);
}




function F11(){
	for(i = 0; i<to_verify.length; i++){
	    const rownumber = array_number[i].split(' ');
		for(j = 0; j<rownumber.length; j++){
			to_verify[i][j] = rownumber[j];
		}
	}
	console.log(to_verify);
	/*let to_check = [];
	let num = 0;
	for(let i = 0; 0<9; i++){
		to_check[i];
		for(let j=0; j<9;j ++){
			for(i =0; i<9; i++){
				to_check[i][j]= to_verify;
			}
		}
	}
	return to_check;*/
	
}

function F12(){
var tabla = document.getElementById('sudokutable');
  for (let i = 0; i < 9; i++) {
    tabla += '<tr>';
    for (let j = 0; j < 9; j++) {
      tabla += `<td>${to_verify[i][j]}</td>`;
    }
    tabla += '</tr>';
  tabla
  tabla += '</table>';

}
}
