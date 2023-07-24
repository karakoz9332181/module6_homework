let array = [1, 2, 3, 4, 5, 'STRING','number' , null];

function countEvenAndOdd() {
    let even = 0;
    let odd = 0;

 
    array.map(function (item, index, array) {
        if (item == null) {
            console.log("item " + index + " равен null.");
            return;
        }

        if (typeof item == "string") {
            console.log("item " + index + " - строка.");
            return;
       
     
        }
          if (item % 2 === 0) even++;
          else odd++;
  
    });
   
      console.log("Чётных: " + even);
    console.log("Нечётных: " + odd);
} 
    countEvenAndOdd();
   

  