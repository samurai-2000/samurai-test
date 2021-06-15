// let result = []
// const getSum = (a = 0, b = 1) => {return a + b}
// const getFib = (length = 10, first = 0) => {
//     let a = 1
//     let b = 1
//     result.push(0)
//     result.push(a || b)
//     result.push(getSum())
//     for(let i = 0; i < length; i++) {
//         let c = getSum(a,b)
//         a = b
//         b = c
//         result.push(b)
//     }
//     return result.slice(first)
// }

// console.log(getFib(20))

let array = [1,1,2,3,4,4,5]
let result = [5,4,3,2,1]

array = array.filter((item, index) => {
    return array.indexOf(item) === index
})
array.reverse()

console.log(array)
