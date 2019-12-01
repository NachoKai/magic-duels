# Magic Duels

## [Live Demo](https://nachokai.github.io/magic-duels/)  
•HTML  
•CSS (Scss, Grid, Flexbox, Responsive Design)  
•Javascript  
•Google Fonts  

/* Under Construction

Aggressive  > Sneaky  
Sneaky      > Defensive  
Defensive   > Aggressive  

* If you win, you will choose a spell which corresponds to the stance you selected. Your goal is to get your opponents stamina to 0 before your own stamina depletes.  
* Spells can have a couple different effects: direct damage or healing, a chance for damage or healing over time, or a chance for a stun.  
* A stunned character will still be able to choose a stance each turn they’re stunned. If a stuned character wins the turn simply ends, if the stunned character loses then the turn proceeds as normal with the opposing character choosing a spell.  
* When both characters choose the same stance the round will tie and both can be healed, damaged or nothing depending the action.  
  
* Table  
```
______________________________________________________________
			                USER	
		    DEF	            SNE             AGG
        DEF	+1    tie  +1	-2 user win 0	+1 comp win -1
        
COMP	SNE	0 comp win -2	-1   tie   -1	 -2 user win 0

	AGG    -1 user win +1	0 comp win -2  	 0   tie     0
______________________________________________________________
```

! Health: 100 HP  

* Action types:  
* Aggressive *  
Expelliarmus	10 Dmg		Stun 1 turn chance  
Incendio    	5 Dmg		-1 Dmg 2 turns chance  
Depulso	       	17 Dmg		–  
Confringo	   	5 Dmg		Stun 2 turns chance  
  
* Sneaky *  
Rictusempra	   	10 Dmg		Stun 1 turn chance  
Flipendo	   	15 Dmg		–  
Immobulus   	5 Dmg		Stun 2 turn chance  
Diffindo	   	6 Dmg		-3 Dmg 8 turns chance  
  
* Defensive *  
Wiggenweld Potion	3 Heal/+6 Heal 2 turns    –  
Episkey	           	10 Heal	    	            +5 Heal 2 turns chance  
Pertificus Totalus	5 Dmg	                	    Stun 2 turns chance  
Bombarda	       	10 Dmg	                        Stun 1 turn chance  

? Details:
Cada hechizo es una funcion con sus respectivos +1 -+ stuns etc  
Mostrar lista de hechizos depende que tipo de accion eligio  
ToDo agregar Magic points que se vayan restando depende el hechizo?  
*/
