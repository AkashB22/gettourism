class config{
    constructor(){
        this.DB_URI = process.env.NODE_ENV
    }
}

module.exports = config;