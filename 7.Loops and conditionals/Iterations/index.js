// const arr = [10,20,30,40,50]
// for (const i of arr) {
//     console.log(i)
// }
// const greeting = "Hello world!"
// for(const greet of greeting) {
//     console.log(`Each word is ${greet}`)
// }

// maps 

const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')
map.set('name','Jhon')
//console.log(map)

for (const [key,value] of map) {
    console.log(key,'-',value)
}
