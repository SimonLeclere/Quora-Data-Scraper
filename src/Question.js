class Question {

    constructor(data) {
    
        // Title
        this.title = data.title || null;

        // Url
        this.url = data.url || null;

        // Answers
        this.answers = data.answers || null;

        // Topics
        this.topics = data.topics || null;

    }

    /**
     * String representation of the Question
     */
    toString() {
        return this.title || "";
    }

}

module.exports = Question;