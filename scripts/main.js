'use strict';

const url = 'https://api.github.com/users/guerrero/repos';
const requestUserRepos = new XMLHttpRequest();
requestUserRepos.open('GET', url, true);

requestUserRepos.onload = () => {
  if (requestUserRepos.status >= 200 && requestUserRepos.status < 400) {
    let dataRepos= JSON.parse(requestUserRepos.responseText);
    let allRepo = [];

    for (const elem of dataRepos) {
      const {name} = elem || 'Sin nombre';
      const {stargazers_count} = elem || 0;

      allRepo.push({'name': name, 'starsCount':stargazers_count});
    }

    for (const elem of allRepo) {
      console.log(`Name: ${elem.name} Stars: ${elem.starsCount}`);
    }

  } else {
    console.log("An error has ocurred");
  }
};

requestUserRepos.onerror = () => {
  console.log("There has been an error");
};

requestUserRepos.send();
