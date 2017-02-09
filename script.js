(function(){

  winners = [];

  function positions(state, player){
    for(var i=0; i<state.length; i++){
      var tempState = state.slice();
      if(tempState[i]==0 && tempState[i+1]==0){
        tempState[i] = 1;
        tempState[i+1] = 1;
        var result = positions(tempState, !player);
        if(!consecutiveZeros(tempState)){
          winners.push(result);          
        }
      }
    }
    return {winner: player ? 'player2' : 'player1', state: state};
  }

  function consecutiveZeros(state){
    for(var i=0; i<state.length; i++){
      if(state[i]==0 && state[i+1]==0){
        return true;
      }
    }
    return false;
  }

  // assuming player1 goes first
  var player1 = true;
  positions([0,0,0,0], player1);
  console.log(winners);

})();






