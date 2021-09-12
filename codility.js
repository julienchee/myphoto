
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
    
  i = 0;

  if (A[j] != A[i]) {
    result = j - i;
  } else {
    while (i < (N - 1) && a[i] == a[i + 1]) {
      i++;
    }

    while (j > 0 && a[j] == a[j - 1]) {
      j--;
    }

    if (j < i) {
      result = 0;
    } else {
      i++;
      j--;
      result = Math.max(N - 1 - i, j);
    }
  }

  return result;
}