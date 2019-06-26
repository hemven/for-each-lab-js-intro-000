function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var newArray = ["call", "me", "mother"]
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
