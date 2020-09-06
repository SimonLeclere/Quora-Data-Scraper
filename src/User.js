class User {

    constructor(data) {
    
        // Name
        this.name = data.name || null;

        // Description
        this.description = data.description || null;

        // Biography
        this.biography = data.biography || null;

        // Avatar
        this.avatar = data.avatar || null;

        // Url
        this.url = data.url || null;

        // Knowledges
        this.knowledges = data.knowledges || null;

        // Spaces
        this.spaces = data.spaces || null;

        // Followers
        this.followers = data.followers || null;

        // Followings
        this.following = data.following || null;

        // Answers
        this.answers = data.answers || null;

        // Questions
        this.questions = data.questions || null;

        // Shares
        this.shares = data.shares || null;

        // Posts
        this.posts = data.posts || null;

        // Views
        this.views = data.views || null;

        // Last month views
        this.lastMonthViews = data.lastMonthViews || null;

        // Verified
        this.verified = data.verified !== undefined ? data.verified : null;

        // Anonymous
        this.anonymous = data.anonymous !== undefined ? data.anonymous : null;
    }

    /**
     * String representation of the user
     */
    toString() {
        return this.name || "";
    }

}

module.exports = User;