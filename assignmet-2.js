const arr = [1,2,3,4,55,5,6,7,8];
let arrSort=[];
arrSort = arr.sort(function(a,b){
    return a - b;
});
console.log(arrSort);