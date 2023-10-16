class BandSiteApi {

    constructor(apiKey) {
        this.baseURL = ('https://project-1-api.herokuapp.com/');
        this.apiKey = apiKey;
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`, comment);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    async getComments() {
        try {
            const url = `${this.baseURL}comments?api_key=${this.apiKey}`;
            const response = await axios.get(url);
            const comments = response.data;
            comments.sort(function (a, b) { return b.timestamp - a.timestamp });
            return comments;
        }
        catch (error) {
            console.log(error);
        }

    }

    async getShows() {
        try {
            const url = `${this.baseURL}showdates?api_key=${this.apiKey}`;
            const response = await axios.get(url);
            const showArray = response.data;
            return showArray;
        }
        catch (error) {
            console.log(error);
        }
    }
}

