class Answer {

    constructor(data) {
    
        // Question
        this.question = data.question || null;

        // Url
        this.url = data.url || null;

        // Content
        this.content = data.content || null;

        // Creation date
        this.creationDate = data.creationDate || null;

        // Author
        this.author = data.author || null;

        // Shares
        this.shares = data.shares || null;

        // Upvotes
        this.upvotes = data.upvotes || null;

        // Views
        this.views = data.views || null;
    }

    /**
     * String representation of the Answer
     */
    toString() {
        return this.content || "";
    }

}

module.exports = Answer;