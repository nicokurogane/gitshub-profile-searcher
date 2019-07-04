export class Request {
  constructor() {
    this.GITHUB_TOKEN = "15feb56dc698a1ecf7ec5e02e4b4e75ba964693d";
    this.BASE_USER_URL = "https://api.github.com/users/";
    this.SEARCH_USER_URL = "https://api.github.com/search/users";
    this.QUERY = "?q=";
    this.FETCH_OPTIONS = {
      method: "GET",
      headers: {
        Authorization: `token ${this.GITHUB_TOKEN}`
      }
    };
  }

  async performRequest(url) {
    let response = await fetch(url, this.FETCH_OPTIONS);
    let userInfo = await response.json();
    return userInfo;
  }

  searchUserProfile(username) {
    return this.performRequest(
      `${this.SEARCH_USER_URL}${this.QUERY}${username}`
    );
  }

  getNumberOfStars(username) {
    return this.performRequest(`${this.BASE_USER_URL}${username}/starred`);
  }

  getNumberOfRepositories(username) {
    return this.performRequest(`${this.BASE_USER_URL}${username}/repos`);
  }

  getNumberOfFollowers(username) {
    return this.performRequest(`${this.BASE_USER_URL}${username}/followers`);
  }

  getNumberOfFollowing(username) {
    return this.performRequest(`${this.BASE_USER_URL}${username}/following`);
  }

  getGitHubProfile(username) {
    return this.performRequest(`${this.BASE_USER_URL}${username}`);
  }

  getUserRepos(username){
    return this.performRequest(`${this.BASE_USER_URL}${username}/repos`);
  }
}