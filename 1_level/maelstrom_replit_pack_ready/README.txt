Maelstrom Gunner Pack for Replit / Phaser / HTML5

Contents:
- assets/sprites/maelstrom_gunner_spritesheet.png
- assets/sprites/maelstrom_gunner_spritesheet.json
- assets/sprites/maelstrom_gunner_animations.js
- preview.png

Frame size: 192x224
Sheet size: 768x896

Animations:
- walk_right: 4 frames
- walk_left: 4 frames
- death_right: 3 frames
- death_left: 3 frames

Example Phaser 3 loading:
this.load.atlas('maelstrom',
  'assets/sprites/maelstrom_gunner_spritesheet.png',
  'assets/sprites/maelstrom_gunner_spritesheet.json'
);
