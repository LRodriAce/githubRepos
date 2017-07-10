'use strict';

const url = 'https://api.github.com/users/guerrero/repos';
let requestUserRepos = new XMLHttpRequest();
requestUserRepos.open('GET', url, true);

requestUserRepos.onload = function() {
  if (requestUserRepos.status >= 200 && requestUserRepos.status < 400) {
    let dataRepos= JSON.parse(requestUserRepos.responseText);
    let allRepo = [];

    for (const elem of dataRepos) {
      let repoInfo = {
        name: "",
        starsCount: 0
      };
      repoInfo.name = elem.name || 'Sin nombre';
      repoInfo.starsCount = elem.stargazers_count || 0;
      allRepo.push(repoInfo);
    }
    for (const elem of allRepo) {
      console.log("Name: " + elem.name + " Stars: " + elem.starsCount);
    }

  } else {
    console.log("An error has ocurred");
  }
};
requestUserRepos.onerror = function() {
  console.log("There has been an error");
};
requestUserRepos.send();
