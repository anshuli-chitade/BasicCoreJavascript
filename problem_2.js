
  function coinFlip(){
          return(Math.random() < 0.5) ? 'Tails' : 'Heads'; 
  }

  var Times=prompt("number of times coin to be flipped? ");
  var countTails=0; 
  for (var i=0; i<Times; i++)
  {
      if (coinFlip()==='Tails')
      {
        countTails++;
      }
  }
  alert("percentage of Tails "+(countTails/Times)*100+"% time than heads");
      