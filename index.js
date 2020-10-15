const StandardRequestFields = require("./src/entities/StandardRequestFields")

class Header{

    standardRequestFields(){
        return new StandardRequestFields([])
    }

    nonStandardRequestFields(){
        return new NonStandardRequestFields([])
    }

    standardReponseFields(){

    }

    nonStandardResponseFields(){

    }

}

console.time()

const header = 
new Header()
.standardRequestFields()
    .AcceptCharset()
    .Accept()
    .AIM()
    .AcceptDatetime()
    .Connection()
    .CacheControl(true)
    .From('http://xd.com')
    .Date()
    .end()
.generate()

console.timeEnd()
console.log(header)