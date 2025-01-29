class CollisionAnimation {
    constructor(game, x, y) {
        this.game = game
        this.image = document.getElementById('boom-effect')
        this.spriteWidth = 100 
        this.spriteHeight = 90
        this.sizeModifer = Math.random() + 0.5
        this.width = this.spriteWidth * this.sizeModifer
        this.height = this.spriteHeight * this.sizeModifer
        this.x = x - this.width * 0.5
        this.y = y - this.height * 0.5
        this.frameX = 0
        this.maxFrame = 4
        this.markedForDeletion = false
    }
}