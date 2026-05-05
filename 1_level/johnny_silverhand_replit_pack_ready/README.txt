Johnny Silverhand Pack for Replit / Phaser / HTML5

Contents:
- assets/sprites/johnny_silverhand_spritesheet.png
- assets/sprites/johnny_silverhand_spritesheet.json
- assets/sprites/johnny_silverhand_animations.js
- preview.png

Frame size: 192x224
Sheet size: 576x1344

Animations:
- walk_right: 3 frames
- walk_left: 3 frames
- jump_right: 2 frames
- jump_left: 2 frames
- death_right: 1 frame
- death_left: 1 frame

Example Phaser 3 loading:
this.load.atlas('johnny',
  'assets/sprites/johnny_silverhand_spritesheet.png',
  'assets/sprites/johnny_silverhand_spritesheet.json'
);
