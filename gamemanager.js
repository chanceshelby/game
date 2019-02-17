let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Player1":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Player2":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Player3":
        player = new Player(classType, 80, 0, 100, 50, 200, 50);
        break;
      case "Player4":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
	  let getHeader = document.querySelector(".header");
	  let getActions = document.querySelector(".actions");
	  let getArena = document.querySelector(".header");
	  getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
	  getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">search for an enemy</a>';
	  getArena.style.visibility = "visible";
  },
  setFight: function() {
	  let getHeader = document.querySelector(".header");
	  let getActions = document.querySelector(".actions");
	  let getEnemy = document.querySelector(".enemy");
	  //create enemy
	  let enemy00 = new Enemy("Enemy1", 100, 0, 50, 100, 100);
	  let enemy01 = new Enemy("Enemy2", 200, 0, 150, 80, 150);
	  
	  let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
	  switch (chooseRandomEnemy) {
	  	case 0:
          enemy = enemy00;
		  break;
	  	case 1:
	      enemy = enemy01;
		  break;
	  }
	  getHeader.innerHTML = '<p>Task: Choose your move</p>';
	  getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
	  getEnemy.innerHTML = '<img src="img/' + enemy.classType.toLowerCase() + '.png" alt"' + enemy.classType + '"class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}
