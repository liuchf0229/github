var aArr = [1,2,[3,3]]
var newArr = []

function arrFmt(arr) {
  for(var i=0;i<arr.length;i++){
      var value = arr[i]
      // console.log(value)
      // console.log(typeof value === 'object')
      // typeof value === 'object'? arrFmt(value) : newArr.push(value)
      if(Array.isArray(value)) {
        arrFmt(value)
      }else {
        // console.log('进入else',value)
        newArr.indexOf(value) === -1 && newArr.push(value)
        console.log('newArr',newArr)
      }
  }
  
  return newArr
}

arrFmt(aArr)
console.log('aArr=',arrFmt(aArr))
