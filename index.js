//1
function greatestOfTwo(x, y){
  if(x > y) {
      console.log(x);
  } else
  console.log(y)
}

//2
function greatestOfThree(x, y, z){
    if(x > y && x > z) {
        console.log(x)
    } else if (y > x && y > z) {
        console.log(y)
    } else if (z > x && z > y) {
        console.log(z)
    }
}

//3
function greatestOfFour(w, x, y, z){
   if(w > x && x > y && w > z ) {
        console.log(w)
    } else if (x > w && x > y && x > z) {
        console.log(x)
    } else if (y > w && y > x && y > z) {
        console.log(y)
    } else if (z > w && z > x && z > y) {
        console.log(z)
    }
}


//4
function leastOfFour(w,x,y,z){
   if(w < x && x < y && w < z ) {
        console.log(w)
    } else if (x < w && x < y && x < z) {
        console.log(x)
    } else if (y < w && y < x && y < z) {
        console.log(y)
    } else if (z < w && z < x && z < y) {
        console.log(z)
    }
}

//greatestOfTwo(5, 8)
//greatestOfThree(20, 16, 98)
//greatestOfFour(12, 45, 67, 2)