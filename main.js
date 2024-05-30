import { createLayout } from './app/layout.js';
import { getRepos } from './app/fetch.js';
import { repos } from './app/fetch.js';
import { createRepoItem } from './app/layout.js';

createLayout();

const input = document.querySelector('.app__input');
const searchedRepos = document.querySelector('.searched-repos');
const addedRepos = document.querySelector('.added-repos__list');

input.addEventListener('input', function() {
    searchedRepos.classList.remove('visible');
    searchedRepos.innerHTML = '';
    getRepos(input, searchedRepos);
});

searchedRepos.addEventListener('click', function(e) {
    const repo = repos.find(item => item.full_name === e.target.textContent);
    createRepoItem(repo, addedRepos);
    this.classList.remove('visible');
    this.innerHTML = '';
    input.value = '';
});

addedRepos.addEventListener('click', function(e) {
    if (!e.target.matches('.added-repos__btn')) return;
    e.target.closest('.added-repos__item').remove();
});

window.addEventListener('click', function() {
    searchedRepos.classList.remove('visible');
    searchedRepos.innerHTML = '';
});