function theBeatlesPlay(musicians,instruments){
 var emptyarray = []
  for (var i = 0; i<instruments.length;i++){
    
    emptyarray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return emptyarray
  }
  function johnLennonFacts(facts){
   var i = 0
    while (i<facts.length){
      facts[i] += "!!!"
     i++
    }
  return facts
    
  }
  function iLoveTheBeatles(n){
    var emptyarray = []
   var counter = 0
    do {
      emptyarray.push("I love the Beatles!")
    }while (counter<15){
      counter++
    }
       return emptyarray
  }