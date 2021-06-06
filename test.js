// Question 1
var num = [1,5,8,4,23,6];
b = [];

for(var i = 0; i < num.length; ++i){
    if((num[i] % 2) === 0){
        b.push(num[i]);
    }
}

console.log(b);



//Question 2
const arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];

const findMaxConsecutiveOnes = (arr = []) => {
   let left = 0;
   let right = 0;
   let max = 0;
   while (right < arr.length) {
      if (arr[right] === 0) {
         if (right - left > max) {
            max = right - left
         };
         right++;
         left = right;
      } else {
         right++
      };
   };
   return right - left > max ? right - left : max;
}
console.log(findMaxConsecutiveOnes(arr));

//Question 3
const findDuplicates = (nums) => {
    //To store the numbers that appeared twice
    let result = [];
    
    //Itearte each element
    nums.forEach((val, ind, arr) => {
        
        //Use the value as index
        let temp = Math.abs(arr[ind]) - 1;
        
        //If the number is already negative
        //That means it has appeared once and this is its second time.
        //So add it in the result
        if(arr[temp] < 0){
            result.push(temp+1);
        }
        
        //Multiply the element at the given index with negative number
        arr[temp]*= -1;
    });
    
    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));

//Question 4
 /**
   * Fetch data from JSON file
   * Returns a Promise object with data sourced from JSON file
   */
function getApiData() {
    const URL = 'www.example.com/api/get/1'
    return fetch(URL)
      .then((response) => {
        return response.ok
          ? response.json()
          : Promise.reject(response.statusText);
      })
      .catch((error) => {
        throw new Error(error);
      });
}

//Question 5
//Write a code to sort the object by id

var obj = [
{
    "id": 4,
    "name": "abc"
},
{
    "id" : 10, 
    "name": "ab2"
},
{
    "id": 5,
    "name":"abc3"
},
{
    "id": 6,
    "name": "abc5"
}
]

obj.sort(function(a, b) { 
    //  expression will first compare the ids; 
    // only if they are equal, it will compare the names (and return the result of this comparison
    return a.id - b.id  ||  a.name.localeCompare(b.name);
  });

  console.log(obj);
