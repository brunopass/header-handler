const StandardRequestFields = require("./entities/StandardRequestFields")

class TransitionHandler{
    #state
    constructor(state){
        this.#state = [] = state
    }

    standardRequestFields(){
        return new StandardRequestFields(this.#state)
    }

    generate(){
        return this.#state
    }

}

module.exports = TransitionHandler