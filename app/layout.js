export function createLayout() {
    const app = document.createElement('div');
    app.classList.add('app');

    const container = document.createElement('div');
    container.classList.add('app__body');

    const form = document.createElement('form');
    form.classList.add('app__form');

    const input = document.createElement('input');
    input.classList.add('app__input');
    input.setAttribute('name', 'search-repository');
    input.setAttribute('placeholder', 'search repository');

    const searchedRepos = document.createElement('div');
    searchedRepos.classList.add('searched-repos');
    
    const addedRepos = document.createElement('div');
    addedRepos.classList.add('added-repos');
    const addedReposList = document.createElement('ul');
    addedReposList.classList.add('added-repos__list');

    form.append(input, searchedRepos);
    addedRepos.append(addedReposList);
    container.append(form, addedRepos);
    app.append(container);
    
    document.body.append(app);
}

export function createRepoItem(repo, container) {
    const item = document.createElement('li');
    item.classList.add('added-repos__item');

    const sublist = document.createElement('ul');
    sublist.classList.add('added-repos__sublist');
    const name = `<li>Name: ${repo.name}</li>`;
    const owner = `<li>Owner: ${repo.owner.login}</li>`;
    const stars =`<li>Stars: ${repo.stargazers_count}</li>`;
    sublist.insertAdjacentHTML('beforeend', name);
    sublist.insertAdjacentHTML('beforeend', owner);
    sublist.insertAdjacentHTML('beforeend', stars);

    const btn = document.createElement('button');
    btn.classList.add('added-repos__btn');
    btn.setAttribute('type', 'button');

    item.append(sublist, btn);
    container.append(item);
}