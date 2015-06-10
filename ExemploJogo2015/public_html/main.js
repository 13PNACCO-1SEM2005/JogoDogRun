
var game = new Phaser.Game(1024, 512, Phaser.AUTO, '', {preload: preload, create: create, update: update});



var fundo;

//var tempo = 0;

//var teclado;

var dog;

//var buldog;
//var rock;
//var speed = 2;




function preload() {

    
	game.load.image('fundo01', 'bg/cen.png');

	game.load.spritesheet('cao', 'sprite/cao/cao.png', 175, 100);

	//game.load.spritesheet('bul', 'sprite/bul/bul.png', 120, 90);
	//game.load.spritesheet('pedra', 'sprite/obj/pedra.png', 60,30);


	//teclado = game.input.keyboard.createcursorkeys();


}





function create() {



	//    game.physics.startSystem(Phaser.Physics.ARCADE);

	
	fundo = game.add.tileSprite(0, 0, 1024, 512, 'fundo01');

		

	dog = game.add.sprite(100, 400, 'cao');

	dog.animations.add('parado', [0], 10, true);

	dog.animations.add('correr', [1, 2, 3, 4, 5, 6, 7, 8], 2, true);
	dog.animations.add('rastejar', [9, 10, 11, 12, 13, 14, 15, 16], 8, true);
	dog.animations.add('pular', [17, 18, 19, 20, 21, 22, 23, 24], 1, true);
	dog.animations.add('tonto', [25, 26, 27, 28, 29, 30, 31, 32], 8, true);

	//buldog = game.add.sprite(-100,-100, 'bul');
	//buldog.animations.add('correr',[0, 1 ,2, 3, 4, 5, 6, 7], 8, true);

	//rock = game.add.sprite(-100, -100, 'pedra');
	//rock.animations.add('pedr', [0], 10, true);

	//dog.enableBody = true;

	//dog.body.gravity.y = 600;
	//dog.body.bounce.y = 0;
	
	
	//    game.physics.arcade.enable(sprBoneco);

//    sprBoneco.body.offset.y = -30;
    
//    sprBoneco.body.offset.x = 30;
    

//    game.physics.enable(plata1, Phaser.Physics.ARCADE, true);

    //sprBoneco.body.bounce.y = 0.2;

 //   sprBoneco.body.gravity.y = 600;

 //   sprBoneco.body.collideWorldBounds = true;
 

// ajusta o timer
	
//tempo = new Timer(game, false);

	
	//tempo.add


}



function update() {
 		
	//dog.animations.play('parado', 10, true, false);
	
	//if (game.time = 200) {
		fundo.tilePosition.x -= 2;
	dog.animations.play('tonto');
	//


	//while (tempo < 10000) {
	//	tempo = game.time.now;}
	
	//if (tempo = 10000) {
	//	fundo.tilePosition.x -= 5;}
	
	//game.physics.arcade.collide(sprBoneco, plata1);

	// if (teclado.left.isDown) {
        // fnd1.body.velocity.x = 200;
        // plata1.body.velocity.x = 180;
        // sprBoneco.animations.play('dir');
    // }
    // else if (teclado.right.isDown) {
        // fnd1.body.velocity.x = -200;
        // plata1.body.velocity.x = -180;
        // sprBoneco.animations.play('dir');
    // }
    // else {
        // plata1.body.velocity.x = 0;
        // sprBoneco.animations.play('parado');
        // fnd1.body.velocity.x = 0;
    // }
     
//Allow the player to jump if they are touching the ground.
    // if (teclado.up.isDown && sprBoneco.body.touching.down)
    // {
        // sprBoneco.animations.play('pulo');
        // sprBoneco.body.velocity.y = -1500;
    // 


	}