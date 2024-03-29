import { Request } from "./classes/Request.js";
import { UI } from "./classes/UI.js";

let requestHandler = new Request();

document.getElementById("github-user-form").addEventListener("submit", e => {
  UI.resetMessage();
  e.preventDefault();
  let username = document.getElementById("username").value;
  findUserProfileInfo(username);
});

document.getElementById("username").addEventListener("keyup", e => {
  UI.resetMessage();
  e.preventDefault();
  let username = e.target.value;
  if (username !== "") findUserProfileInfo(username);
  else UI.showErrorMessage("username can't be empty");
});

function findUserProfileInfo(username) {
  requestHandler
    .searchUserProfile(username)
    .then(userInfo => {
      console.log(userInfo);
      if (userInfo.message === "Validation Failed") {
        UI.showErrorMessage("username couldn't be found.");
      } else {
        fetchingMissingData(userInfo.items[0]);
      }
    })
    .catch(err => console.log(err));
}

function fetchingMissingData(userInfo) {
  UI.setProfileImage(userInfo.avatar_url);
  requestHandler.getGitHubProfile(userInfo.login).then(profile => {
    UI.setName(profile.name);
    UI.setCompany(profile.company);
    UI.setLocation(profile.location);
    UI.setFollowers(profile.followers);
    UI.setFollowing(profile.following);
    UI.setProfileUrl(profile.html_url);
    UI.setNumberOfPublicRepos(profile.public_repos);
    UI.setWebsite(profile.blog);
    UI.setRegisteredDate(profile.created_at);
  });
  requestHandler
    .getNumberOfStars(userInfo.login)
    .then(starredRepos => UI.setNumberOfStars(starredRepos.length));

  requestHandler
    .getUserRepos(userInfo.login)
    .then(repos => UI.setUsersRepositories(repos));
}
