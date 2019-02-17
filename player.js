let player;

function Player(classType, health, mana, strength, agility, speed) {
	this.classType = classType;
	this.health = health;
	this.mana = mana;
	this.strenght = strength;
	this.agility = agility;
	this.speed = speed;
}

let PlayerMoves = {
	calcAttack: function() {
		//who attacks first
		let getPlayerSpeed = player.speed;
		let getEnemySpeed = enemy.speed;
		
	let playerAttack = function() {
		let calcBaseDamage;
		if (player.mana > 0) {
			calcBaseDamage = player.strength * player.mana / 1000;
		} else {
			calcBaseDamage = player.strength * player.agility / 1000;
		}
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage;
		//number of hits
		let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility) /2) + 1;
		let attackValues = [calcOutputDamage, numberOfHits];
		return attackValues;
		}
		let enmyAttack = function() {
			let calcBaseDamage;
			if (enemy.mana > 0) {
				calcBaseDamage = enemy.strength * enemy.mana / 1000;
			} else {
				calcBaseDamage = enemy.strength * enemy.agility / 1000;
			}
			let offsetDamage = Math.floor(Math.random() * Math.floor(10));
			let calcOutputDamage = calcBaseDamage + offsetDamage;
			//number of hits
			let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility) /2) + 1;
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
			}
			// get player/enemy health to change later
			let getPlayerHealth = document.querySelector(".health-player");
			let getEnemyHealth = document.querySelector(".enemy-player");
			//initiate attacks
			if (getPlayerSpeed >= getEnemySpeed) {
				let playerAttackValues = playerAttack;
				let totalDamage = playerAttackValues[0] * playerAttackValues[1];
				enemy.health = enemy.health - totalDamage;
				alert("You hit " + playerattackValues[0] + " damage " + playerAttackValues[1] + " times");
				if (enemy.health <= 0) {
					alert("You win!");
					getPlayerHealth.innerHTML = 'Health: ' + player.health;
					getEnemyHealth.innerHTML = 'Health: 0';
				} else {
					getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
					//enemy attacks
					let enemyAttackvalues = enemyAttack();
					let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
					player.health = player.health - totalDamage;
					alert("Enemy hit " + enemyattackValues[0] + " damage " + enemyAttackValues[1] + " times");
					if (player.health <= 0) {
						alert("You loose!");
						getPlayerHealth.innerHTML = 'Health: 0';
						getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
					} else {
						getPlayerHealth.innerHTML = 'Health: ' + player.health;
					}
				}
			}
		}
	}
