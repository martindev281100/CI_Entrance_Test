// // Exercise 1
// let n = Number(prompt('Enter n: '));
// let first_num = Number(prompt('Enter first num: '));
// let step = first_num
// let arr_n = [];
// for (let i = 0; i< n; i = i + step)
// {
//     arr_n.push(i);
// }

// let opposite_num = 0;
// if(arr_n.length % 2 == 0)
// {
//     opposite_num = arr_n[(arr_n.length)/2]
// }
// else{
//     console.log('Dont have opposite number')
// }
// console.log('Opposite number: '+ opposite_num)

// //Exercise 2
// let s1 = 'supermanbatmanspiderman'
// let s2 = 'towerempirestate'
// let split1 = s1.split('')
// let split2 = s2.split('')
// let large_arr;
// if (split1.length > split2.length) {
//     large_arr = split1
// } else {
//     large_arr = split2
// }
// let new_arr = []
// for (let i = 0; i < large_arr.length; i++) {
//     if (split1.length <= i) {
//         new_arr.push(split2[i]);
//     } else if (split2.length <= i) {
//         new_arr.push(split1[i]);
//     } else {
//         new_arr.push(split1[i]);
//         new_arr.push(split2[i]);
//     }
// }
// let new_str = new_arr.split(',')
// console.log(new_str)

