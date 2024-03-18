// https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe/train/javascript
// Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

// Example:

// [1,3,2]  =>  [1,2,3]

function sort(items){
    // create your custom sort logic 
     if (items.length <= 1) {
          return items;
      }
  
      let minIndex = 0;
      let minValue = items[0];
  
      for (var i = 1; i < items.length; i++) {
          if (items[i] < minValue) {
              minIndex = i;
              minValue = items[i];
          }
      }
  
      var smallest = items.splice(minIndex, 1)[0];
      return [smallest].concat(sort(items));
    
  }