// Have the function ArrayAddition(arr) take the array of numbers 
// stored in arr and return the string true 
// if any combination of numbers in 
// the array (excluding the largest number) 
// can be added up to equal the
//  largest number in the array, otherwise return the string false. 
//  For example: if arr contains [4, 6, 23, 10, 1, 3] 
// the output should return true
//  because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements,
// and may contain negative numbers.

// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true

function ArrayAddition(arr) {
  let maxValue = arr[0];
  let length = arr.length;
  let newArr = [];
  let restSum = 0;

  for(let i = 1; i < length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  for(let i = 0; i < length; i++) {
    if (maxValue > arr[i]) {
      newArr.push(arr[i]);
    }
  }

  for(let i = 0; i < length; i++) {
    if (maxValue > arr[i]) {
      restSum += arr[i];
    }
  }
  newArr.sort((a, b) => a - b);


}

console.log(ArrayAddition([5,7,16,1,2]));

function ArrayAddition(arr) {
  arr.sort(function(a,b){return a - b});
  var maxNum = arr.pop();
  var tot = 0;
    
  for (var i = 0; i < arr.length; i++){
    tot += arr[i];
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        tot += arr[j];
        if (tot == maxNum) {
          return true;
        }
      }
    }
      
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        tot -= arr[k];
        if (tot == maxNum) {
          return true;
        }
      }
    }
    tot = 0;
  }
    
  return false;
}

let arr = [1, 3, 4, 9];
let mx = Math.max.apply(Math, arr)    // 3
let items = [], vis = [], vis_temp = [];
let i, j;
for (i = 0; i < arr.length; i ++) if(arr[i] != mx) items.push(arr[i]);

items.sort(function(a, b) {
  return a - b;
});

for (i = 0; i <= mx; i ++) {
  vis.push(0);
    vis_temp.push(0);
}
vis[0] = 1;
for (i = 0; i < items.length; i ++) {
  for (j = 0; j <= mx; j ++) vis_temp[j] = vis[j];
  for (j = 0; j <= mx; j ++) if(vis[j]) {
      vis_temp[j + items[i]] = 1;
    }
    for (j = 0; j <= mx; j ++) vis[j] = vis_temp[j];
}
document.getElementById("demo").innerHTML =
"The value of z is: " + vis[mx] ? "True" : "False" ;
</script>