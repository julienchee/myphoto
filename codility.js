
function solution(A) {
    var N = A.length;
    var result = 0;
    var i, j;
    for (i = 0; i < N; i++)
        for (j = i; j < N; j++)
            if (A[i] != A[j])
                result = Math.max(result, j - i);
    return result;
}


function solution(A) {
    var N = A.length;
    var result = 0;
    var i, j;
	j = N -1;
    for (i = 0; i < N; i++)
        if (A[i] != A[j]) {
			result = Math.max(result, j - i);
			break;
		} else {
		}
    return result;
}