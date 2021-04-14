function f1() {
  return new Promise(resolve=>{
    setTimeout(()=>{
        console.log(1)
        resolve(1)
    },1000)
  })
}

f1().then(res=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log(2)
      resolve(3)
    },1000)
  })
})
.then(res=>{
  console.log(res)
})