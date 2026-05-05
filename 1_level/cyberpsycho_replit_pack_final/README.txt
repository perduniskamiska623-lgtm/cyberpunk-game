Cyberpsycho Pack for Replit / Phaser / HTML5

Contents:
- assets/sprites/cyberpsycho_spritesheet.png
- assets/sprites/cyberpsycho_spritesheet.json
- assets/sprites/cyberpsycho_animations.js
- preview.png

Frame size: 205x224
Sheet size: 615x1792

Animations:
- run_right: 3 frames
- run_left: 3 frames
- punch_right: 3 frames
- punch_left: 3 frames
- jump_punch_right: 3 frames
- jump_punch_left: 3 frames
- death_right: 2 frames
- death_left: 2 frames

Example Phaser 3 loading:
this.load.atlas('cyberpsycho',
  'assets/sprites/cyberpsycho_spritesheet.png',
  'assets/sprites/cyberpsycho_spritesheet.json'
);
