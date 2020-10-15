const TransitionHandler = require("../TransitionHandler")

class StandardRequestFields{
    #state
    constructor(state){
        this.#state = [] = state
    }

    AIM(msg){
        this.#state.push({"A-IM": msg || "feed"})
        return new StandardRequestFields(this.#state)
    }

    Accept(msg){
        this.#state.push({"Accept": msg || "text/html"})
        return new StandardRequestFields(this.#state)
    }

    AcceptCharset(msg){
        this.#state.push({"Accept-Charset": msg || "utf-8"})
        return new StandardRequestFields(this.#state)
    }

    AcceptDatetime(msg){
        this.#state.push({"Accept-Datetime": msg || new Date().toISOString()})
        return new StandardRequestFields(this.#state)
    }

    AcceptEncoding(msg){
        this.#state.push({"Accept-Encoding": msg || "gzip"})
        return new StandardRequestFields(this.#state)
    }

    AcceptLanguage(msg){
        this.#state.push({"Accept-Language": msg || "en-US"})
        return new StandardRequestFields(this.#state)
    }

    AccessControlRequestMethod(msg){
        this.#state.push({"Access-Control-Request-Method": msg || "GET"})
        return new StandardRequestFields(this.#state)
    }

    Authorization(msg){
        this.#state.push({"Authorization": msg || "Basic"})
        return new StandardRequestFields(this.#state)
    }

    CacheControl(msg){
        this.#state.push({"Cache-Control": msg || "no-cache"})
        return new StandardRequestFields(this.#state)
    }

    Connection(msg){
        this.#state.push({"Connection": msg || "keep-alive"})
        return new StandardRequestFields(this.#state)
    }

    ContentEncoding(msg){
        this.#state.push({"Content-Encoding": msg || "gzip"})
        return new StandardRequestFields(this.#state)
    }

    ContentType(msg){
        this.#state.push({"Content-Type": msg || "application/x-www-form-urlencoded"})
        return new StandardRequestFields(this.#state)
    }

    Cookie(msg){
        this.#state.push({"Cookie": msg})
        return new StandardRequestFields(this.#state)
    }

    Date(msg){
        this.#state.push({"Date": msg || new Date().toISOString()})
        return new StandardRequestFields(this.#state)
    }

    Expect(msg){
        this.#state.push({"Expect": msg || "100-continue"})
        return new StandardRequestFields(this.#state)
    }

    Forwarded(msg){
        this.#state.push({"Forwarded": msg})
        return new StandardRequestFields(this.#state)
    }

    From(msg){
        this.#state.push({"From": msg})
        return new StandardRequestFields(this.#state)
    }

    Host(msg){
        this.#state.push({"Host": msg})
        return new StandardRequestFields(this.#state)
    }

    

    end(){
        return new TransitionHandler(this.#state)
    }
}

module.exports = StandardRequestFields