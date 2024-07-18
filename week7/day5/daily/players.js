export class Player{
    constructor(name){
        this.name = name
        this.score = 0
        this.wrong = 0
    }

    addCorrect(){
        return this.score += 1
    }

    addWrong(){
        return this.wrong += 1
    }

}

export class Players{
    players = []

    static addPlayer(player){
        this.players.push(player)
    }
}