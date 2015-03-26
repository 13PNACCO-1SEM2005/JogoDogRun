
var game = new Phaser.Game(600, 300, Phaser.AUTO, '', {preload: preload, create: create, update: update});


function preload() {

    game.load.image('fundo01', 'fundos/cenario_temp.png');
	
    game.load.image('plata', 'fundos/plataforma.png');
    game.load.spritesheet('boneco', 'sprite/correr/cao_acoes_corre.png',400,400);

    teclado = game.input.keyboard.createCursorKeys();

}


var fnd1, plata1;
var teclado;
var sprBoneco;
var fundo01;




function create() {

	fundo01 = game.add.tileSprite(0,0,600,300, 'fundo01');
	
    game.physics.startSystem(Phaser.Physics.ARCADE);

    fnd1 = game.add.sprite(0, 0, 'fundo01');
    //plata1 = game.add.sprite(0, 170, 'plata');
    //plata1.scale.y = 1.4;

    game.physics.arcade.enable(fnd1);
    //game.physics.arcade.enable(plata1);

    sprBoneco = game.add.sprite(400, 400, 'boneco');
    sprBoneco.animations.add('dir', [0, 1, 2, 3], 11, true);
    sprBoneco.animations.add('parado', [0], 10, true);
    sprBoneco.animations.add('pulo', [1], 10, true);
    game.physics.arcade.enable(sprBoneco);
    sprBoneco.body.offset.y = -30;    
    sprBoneco.body.offset.x = 30;    

    //game.physics.enable(plata1, Phaser.Physics.ARCADE, true);
    //sprBoneco.body.bounce.y = 0.2;
    sprBoneco.body.gravity.y = 300;
    sprBoneco.body.collideWorldBounds = true;

    //plata1.body.immovable = true;


}

function update() {

	fundo01.tilePosition.x -= 2;
	
	game.physics.arcade.collide(sprBoneco, plata1);

    if (teclado.left.isDown) {
        fnd1.body.velocity.x = 200;
       // plata1.body.velocity.x = 180;
        sprBoneco.animations.play('dir');
    }
    else if (teclado.right.isDown) {
        fnd1.body.velocity.x = -200;
      //  plata1.body.velocity.x = -180;
        sprBoneco.animations.play('dir');
    }
    else {
       // plata1.body.velocity.x = 0;
        sprBoneco.animations.play('parado');        
        fnd1.body.velocity.x = 0;
    }

    //  Allow the player to jump if they are touching the ground.
    if (teclado.up.isDown && sprBoneco.body.touching.down)
    {
        sprBoneco.animations.play('pulo');
        sprBoneco.body.velocity.y = -1500;
    }

}

