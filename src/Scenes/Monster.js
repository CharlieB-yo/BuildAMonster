class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        this.dKey = this.input.keyboard.addKey(68);
        this.aKey = this.input.keyboard.addKey(65);
        this.sKey = this.input.keyboard.addKey(83);
        this.fKey = this.input.keyboard.addKey(70);


        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.legLeft = this.add.sprite(this.bodyX-77, this.bodyY+125, "monsterParts", "leg_darkA.png");
        my.sprite.legLeft.flipX = true;
        my.sprite.legRight = this.add.sprite(this.bodyX+77, this.bodyY+125, "monsterParts", "leg_darkA.png");

        my.sprite.armLeft = this.add.sprite(this.bodyX-77, this.bodyY, "monsterParts", "arm_darkC.png");
        my.sprite.armLeft.flipX = true;
        my.sprite.armRight = this.add.sprite(this.bodyX+77, this.bodyY, "monsterParts", "arm_darkC.png");

        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY-150, "monsterParts", "body_whiteC.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY-100, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY-100, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        my.sprite.eyeLeft = this.add.sprite(this.bodyX-45, this.bodyY-160, "monsterParts", "eye_angry_blue.png");
        my.sprite.eyeRight = this.add.sprite(this.bodyX+45, this.bodyY-160, "monsterParts", "eye_angry_blue.png");
        my.sprite.eyeRight.flipX = true;

        my.sprite.antLeft = this.add.sprite(this.bodyX-45, this.bodyY-250, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.antRight = this.add.sprite(this.bodyX+45, this.bodyY-250, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.antRight.flipX = true;
        my.sprite.antLeft.rotation = -0.45;
        my.sprite.antRight.rotation = 0.45;
        
        this.sKey.on('down', (key, event) => {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        })

        this.fKey.on('down', (key, event) => {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        })
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown){
            this.bodyX -= 2;
            //console.log(this.bodyX);
        }
        if (this.dKey.isDown){
            this.bodyX += 2;
        }

        my.sprite.body.x = this.bodyX;
        my.sprite.legLeft.x = this.bodyX-77;
        my.sprite.legRight.x = this.bodyX+77;
        my.sprite.armLeft.x = this.bodyX-77;
        my.sprite.armRight.x = this.bodyX+77;
        my.sprite.head.x = this.bodyX;
        my.sprite.smile.x = this.bodyX;
        my.sprite.fangs.x = this.bodyX;
        my.sprite.eyeLeft.x = this.bodyX-45;
        my.sprite.eyeRight.x = this.bodyX+45;
        my.sprite.antLeft.x = this.bodyX-45;
        my.sprite.antRight.x = this.bodyX+45;

    }

}