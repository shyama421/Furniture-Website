// let name = "jatin"
// name = undefined
// const obj = {name:"jatin"}
// const arr = []

// console.log(typeof arr)


function name(value, value2) {
  return value * value2
}

const val = name(10, 20)
const val2 = name(100, 200)

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius;

console.log(value)

console.log(window)

const addNumber = (a, b) => a + b;

function AddNumber(a, b) {
  return a + b
}

async function getData() {
  try {
    const response = await fetch('https://api.restful-api.dev/objects')
  } catch (err) {
    console.log(err)
  }finally{
      console.log('asd')
  }
}