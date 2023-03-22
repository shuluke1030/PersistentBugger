// function persistence(num) {
//    if(num.toString().length === 1){
//     return 0;
//    }
//    let product = 1;
//    for(let i = 0; i < num.toString().length; i++){
//         product *= parseInt(num.toString()[i], 10);
//    }
//    return 1 + persistence(product);
// }
// console.log(persistence(999));

// function persistence(num) {
//     if(num.toString().length === 1){
//      return 0;
//     }
    
//     let numS = 1;
//     for(let i = 0; i < num.toString().length; i++){
//          numS = numS * parseInt(num.toString()[i],10);
//     }
//     let numN = numS;
//     let count = 0;
//     if(numN.toString().length > 1){
        
//         count = count + persistence(numN);
//     }
//     return count+1;
//  }
//  console.log(persistence(999));


//  function persistence(num) {
//    let count = 0;
//    while (num > 9){
//     count++
//     let numS = 1;
//     for(let i = 0; i < num.toString().length; i++){
//         numS = numS * parseInt(num.toString()[i]);
//     }
//     num = numS
//    }
//    return count;
//  }
//  console.log(persistence(999));