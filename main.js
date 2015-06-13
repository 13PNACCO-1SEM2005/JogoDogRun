
var game = new Phaser.Game(1024, 512, Phaser.AUTO, 'game_div'); 

var cao;
var fundo;
var rock;
var teclado;

var load_state = {  
    preload: function() {    
        game.load.image('fundo01', 'assets/bg/cen.png');      	
        game.load.image('plat', 'assets/bg/plat.png');
		game.load.audio('jump', 'assets/audio/jump.wav');   
        game.load.image('pipe', 'assets/pipe.png');  
        	
		game.load.spritesheet('cao', 'assets/sprite/cao/cao.png', 175, 100);
		game.load.image('pedra', 'assets/sprite/obj/pedra.png');		
		teclado = game.input.keyboard.createCursorKeys();
    },	
	create: function() {
		this.game.state.start('play');
    }
};

var play_state = {    
    create: function() {        
		fundo = game.add.tileSprite(0, 0, 1024, 462, 'fundo01');
		plat = game.add.sprite(0,462,'plat');
		game.physics.enable(plat, Phaser.Physics.ARCADE);
		plat.body.immovable = true;
				
		dog = game.add.sprite(0, 320, 'cao');
		dog.animations.add('parado', [0], 10, true);
		dog.animations.add('correr', [1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		dog.animations.add('rastejar', [9, 10, 11, 12, 13, 14, 15, 16], 8, true);
		dog.animations.add('pular', [17, 18, 19, 20, 21, 22, 23, 24], 4, true);
		dog.animations.add('tonto', [25, 26, 27, 28, 29, 30, 31, 32], 8, true);
		
		this.jump_sound = this.game.add.audio('jump');
		
        game.physics.startSystem(Phaser.Physics.ARCADE);     
        game.physics.enable(dog, Phaser.Physics.ARCADE);
		dog.body.gravity.y=200;              
                
        this.rocks = game.add.group();
        this.rocks.createMultiple(10, 'pipe');
        this.timer = this.game.time.events.loop(3000, this.add_rocks, this);               
    },
    
    update: function() {
        
		fundo.tilePosition.x -= 2;
		game.physics.arcade.collide(dog, plat);						
		
		if (dog.alive == true) {
			this.game.physics.arcade.collide(dog, this.rocks, this.hit_rock, null, this);
			if (dog.body.touching.down) {
				if (teclado.up.isDown){
					dog.animations.play('pular');
					this.jump();
				}
				else {
					dog.animations.play('correr');
				}
			}
			
        }		
    },
    
    jump: function() {
        if (dog.alive === false) {
            return; 
        }		
		dog.body.velocity.setTo(0, -200);
		this.jump_sound.play();
    },
    
	hit_rock: function() {
		if (dog.alive == false){
			return;
		}
		dog.body.moves = false;
        rock.body.moves = false;        

		dog.alive = false

        this.game.time.events.remove(this.timer);
        this.rocks.forEachAlive(function(p){
            p.body.velocity.x = 0;
            p.body.velocity.y = 0;
			fundo.velocity.x = 0;
        }, this);
    },
    restart_game: function() {
        this.game.time.events.remove(this.timer);
        this.game.state.start('play');
    },
    add_rocks: function() {
        var tamanho = (this.game.rnd.integerInRange(5,8)/10);		
		this.add_one_rock(1024, 400, tamanho);
    },
	
    add_one_rock: function(x, y, n) {
            rock = this.rocks.getFirstDead();
            rock.reset(x, y);
            game.physics.enable(rock, Phaser.Physics.ARCADE);
            rock.scale.setTo(n, n);
            rock.body.velocity.setTo(-220, 0);
            rock.body.bounce.set(0);
            rock.checkWorldBounds = true;
            rock.outOfBoundsKill = true;
    },
    checkOverlap: function(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};


game.state.add('load', load_state);

game.state.add('play', play_state);  

game.state.start('load');