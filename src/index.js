module.exports = function check(str, bracketsConfig) {

  let regex =/(\(\))|(\{\})|(\[\])|(\|\|)/;
  let regex1 = /(12)|(34)|(56)|(77)|(88)/;
  console.log(str)
  
  if(str.includes("1")){
  
  do{
  str = str.replace(/(12)/g,"").replace(/(34)/g,"").replace(/(56)/g,"").replace(/(77)/g,"").replace(/(88)/g,"")
  }
  
  while(regex1.test(str))
  console.log(str)
  }else{
  do{
  str = str.replace(/(\(\))/g,"").replace(/(\{\})/g,"").replace(/(\[\])/g,"").replace(/(\|\|)/g,"")
  }while(regex.test(str))
  }
  console.log(str)
  if (str === '') {
  return true
  }else{
  return false
  }
  
  
  }
  