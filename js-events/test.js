// function maskify(cc) {
//   let mask = 'x'

//   return cc.length <= 4 ? cc : mask.repeat(cc.length - 4) + cc.slice(-4)
// }

// // console.log(maskify('12345'))

// function getSum(a, b) {
//   let arr = []
//   for (let i = a; i <= Math.abs(b); i++) {
//     arr.push(i)
//   }
//   console.log(arr)
//   console.log(arr.reduce((accumulator, current) => accumulator + current, 0))
// }

// getSum(0, -1)

const obj = {'black' : 0, 'white' : 1, 'green' : 3}

console.log(obj['green'])