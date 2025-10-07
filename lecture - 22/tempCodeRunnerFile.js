const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
    for(let values of Object.values(team))
      
    console.log(values);
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
 
    this.players.push(id,[])
   
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
   if(id===this.players){
    this.players.push(score);
   }
  },

  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();