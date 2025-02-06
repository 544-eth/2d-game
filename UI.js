export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 30
        this.fontFamily = 'Creepster' 
        this.livesImage = document.getElementById('lives')
    }
    draw(context){
        context.save() 
        context.shadowOffsetX = 3
        context.shadowOffsetyY = 3
        context.shadowColor = 'blue'
        context.shadowBlur = 0
        context.font = this.fontSize + 'px ' + this.fontFamily
        context.textAlign = 'left'
        context.fillStyle = this.game.fontColor
        // score
        context.fillText('Score: ' + this.game.score, 20, 45)
        // timer   
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80)
        // Lives
        for (let i = 0; i < this.game.lives; i++){
            context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25)
        }
        // game over messages
        if (this.game.gameOver){
            context.textAlign = 'center'
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily
            if (this.game.score > this.game.winningScore){
                context.fillText('Excellent', this.game.width * 0.5, this.game.height * 0.5 - 20)
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                context.fillText('Yeah keep it up ', this.game.width * 0.5, this.game.height * 0.5 + 20)
            } else {
                context.fillText('why!!! ', this.game.width * 0.5, this.game.height * 0.5 - 20)
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                context.fillText('Well, give it another try ', this.game.width * 0.5, this.game.height * 0.5 + 20)
            }
        }
        context.restore()
    }
}