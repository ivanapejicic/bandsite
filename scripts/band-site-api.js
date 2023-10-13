
class BandSiteApi {

    constructor(apiKey){
        this.baseURL = ('https://project-1-api.herokuapp.com/');
        this.apiKey = apiKey;
    }

    async postComment(comment){
        const json = JSON.stringify(comment);
        const response = await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`,json);
        return response.data;
    }
    async getComments() {
        const url = `${this.baseURL}comments?api_key=${this.apiKey}`;
        const response = await axios.get(url);
        const comments = response.data;
        comments.sort(function(a,b){return b.timestamp - a.timestamp});
        return comments;
    }

    async getShows() {
        const url = `${this.baseURL}showdates?api_key=${this.apiKey}`;
        const response = await axios.get(url);
        const showArray = response.data;
        return showArray;     
    }
}

