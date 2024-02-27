class Message {
    constructor(from, to, text) {
        this.from = from;
        this.to = to;
        this.text = text;
        this.createdAt = new Date();
    }
}

module.exports = Message;