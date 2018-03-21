// on crée les variables
var snake 
  , grid = 20
  , food;

// on crée notre écran de jeu
function setup() {
	// céation du canvas et de sa taille
	createCanvas(600,600);
	// on récupère l'objet Snake
	snake = new Snake();
	// on défini le famerate 
	frameRate(8);
	// position de la nouriture
	pickLocation();
}

// on crée les position de la nourriture
function pickLocation() {
	// position en X et Y dans la même grille que le serpent
	// pour éviter qu'ils ne soient pas sur le même "plant"
	var cols = floor(width/grid)
	  , rows = floor(height/grid);

	// création de du vector
	food = createVector(floor(random(cols)), floor(random(rows)));
	// positionnement de "food" sur la grille
	food.mult(grid);
}

// on dessine les éléments qui composent le canvas
function draw() {
	// background blanc
	background(51)
	// ici on récupère les diférent états de l'objet Snake
	// ces états sont mis a jour continuellement
	snake.death()
	snake.update()
	snake.show()

	// si le serpent mange alors on re défini un nouvelle emplacement pour 
	// "food"
	if (snake.eat(food)) {
		pickLocation()
	}

	// on choisi la couleur et la position de base de "food"
	fill(255, 0, 100)
	rect(food.x, food.y, grid, grid)
}

// quand on click ...
function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.dir(0, -1)
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1)
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0)
	} else if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0)
	}
}