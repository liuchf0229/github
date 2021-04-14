var deepCopy = (obj) => {
  var ret = {}
  for (var key in obj) {
      var value = obj[key]
      ret[key] = typeof value === 'object' ? deepCopy(value) : value
  }
  return ret
}