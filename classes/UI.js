export class UI {
  static setProfileImage(src) {
    document.getElementById("github-profile-photo").src = src;
  }
  static setName(username) {
    document.getElementById("github-profile-name").innerText = username;
  }
  static setCompany(company) {
    document.getElementById("github-profile-company").innerText = company;
  }

  static setLocation(location) {
    document.getElementById("github-profile-location").innerText = location;
  }
  static setFollowers(numberOfFollowers) {
    document.getElementById(
      "github-profile-followers"
    ).innerText = numberOfFollowers;
  }
  static setFollowing(numberOfFollowing) {
    document.getElementById(
      "github-profile-following"
    ).innerText = numberOfFollowing;
  }
  static setNumberOfPublicRepos(numberOfRepos) {
    document.getElementById("github-profile-repos").innerText = numberOfRepos;
  }
  static setNumberOfStars(numberOfStars) {
    document.getElementById("github-profile-stars").innerText = numberOfStars;
  }

  static setWebsite(personalWebsite) {
    document.getElementById(
      "github-profile-website"
    ).innerText = personalWebsite;
  }

  static setRegisteredDate(registerDate) {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let formattedDate = new Date(registerDate).toLocaleDateString(
      "en-US",
      options
    );
    document.getElementById(
      "github-profile-member-since"
    ).innerText = formattedDate;
  }

  static setProfileUrl(profileUrl) {
    document.getElementById("github-profile-url").href = profileUrl;
    document.getElementById("github-profile-url").innerHTML = profileUrl;
  }

  static setUsersRepositories(repos) {
    let repoContainer = document.getElementById("repo-list-container");
    while (repoContainer.firstChild) {
      repoContainer.removeChild(repoContainer.firstChild);
    }

    repos.forEach(repo => {
      let newRepo = `<h5>${repo.name}</h5>
        <div class="repo-details">
             <span>Number of stars: <span>${repo.stargazers_count}</span></span>
             <span>Number of Forks: <span>${repo.forks_count}</span> </span>
             <span>Number of watchers <span>${repo.watchers_count}</span></span>
             <span><a href="${repo.html_url}">${repo.html_url}</a></span>
        </div>`;
      const divRepo = document.createElement("div");
      divRepo.classList.add("repo-info", "border-bottom");
      divRepo.innerHTML = newRepo;
      repoContainer.appendChild(divRepo);
    });
  }

  static showErrorMessage(msg) {
    let msgLabel = document.getElementById("error-msg");
    msgLabel.innerText = msg;
    msgLabel.classList.remove("hide-msg");
  }

  static resetMessage() {
    let msgLabel = document.getElementById("error-msg");
    msgLabel.innerText = "";
    msgLabel.classList.add("hide-msg");
  }
}
