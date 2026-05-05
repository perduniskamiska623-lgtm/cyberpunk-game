const TRAUMA_TEAM_HOVERCRAFT = {
  key: 'traumaTeamHovercraft',
  image: 'assets/sprites/trauma_team_hovercraft_spritesheet_v1.png',
  frameWidth: 768,
  frameHeight: 384,
  animations: {
    fly_right: [0, 1, 2, 3]
  }
};

if (typeof module !== 'undefined') {
  module.exports = TRAUMA_TEAM_HOVERCRAFT;
}
