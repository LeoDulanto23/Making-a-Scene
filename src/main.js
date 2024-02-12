//Code Practice: Making a scene
//Name: Leonardo Dulanto
//Date: 1/17/24

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene: [MainMenu, Play]
    //scene
}

let game = new Phaser.Game(config)