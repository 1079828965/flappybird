function onloaded(callback){  

  callback(123);
}

onloaded(onfirstloaded)




function onfirstloaded(msg){
  console.log(msg)
}