function removeDuplicates(A)
{
    let length = A.length;
    let temp = [];
    let j = 0;
	let valBefore = 0;

    for (let i=0; i<length; i++) {
        if (A[i] != valBefore) {
            temp.push(A[i]);
			valBefore = A[i];
        }
    }
            
    return temp;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let length = A.length;

    let ANew = A.filter(element => element > 0);
    ANew.sort((a, b) => a - b);

    let CleanedArray = removeDuplicates(ANew);
    let target_value = 1;

    let result = CleanedArray.findIndex((element, index) => element != (index + 1))

    if ( result >= 0) {
        target_value = result + 1;
    } else {
        target_value = CleanedArray.length + 1;
    }
   
    return target_value;
}




