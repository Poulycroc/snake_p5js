// création de l'objet Snake
function Snake() {
	// position X et Y
	this.x = 0;
	this.y = 0;

	// déplacement de base
	this.xs = 1;
	this.ys = 0;

	// taille total, tableau de tuiles
	this.total = 0;
	this.tail = [];

	// direction de Snake
	this.dir = (x, y) => {
		this.xs = x;
		this.ys = y;
	}

	// ici on dit ce qu'il ce passe si Snake mange 
	this.eat = (pos) => {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++
			return true
		} else {
			return false
		}
	}

	// si Snake meurt 
	this.death = () => {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i]
			  , d = dist(this.x, this.y, pos.x, pos.y);

			if (d < 1) {
				this.total = 0;
				this.tail = [];
			}
		}
	}

	// on met a jour le positionnnement de Snake
	this.update = () => {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y)

		// on déplace snake sur la grille
		this.x = this.x + this.xs * grid;
		this.y = this.y + this.ys * grid;

		this.x = constrain(this.x, 0, width-grid);
		this.y = constrain(this.y, 0, height-grid);
	}

	// on défini son apparence
	this.show = () => {
		fill(255)
		// on ajoute des tuiles au serpent
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, grid, grid)
		}
		rect(this.x, this.y, grid, grid)
	}
}