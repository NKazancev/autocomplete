import { createLayout } from './app/layout.js';
import { getRepos } from './app/fetch.js';
import { repos } from './app/fetch.js';
import { createRepoItem } from './app/layout.js';

createLayout();

const input = document.querySelector('.app__input');
const autocomplete = document.querySelector('.autocomplete');
const addedRepos = document.querySelector('.added-repos__list');

input.addEventListener('input', function() {
    autocomplete.classList.remove('visible');
    autocomplete.innerHTML = '';
    getRepos(input, autocomplete);
});

autocomplete.addEventListener('click', function(e) {
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
    autocomplete.classList.remove('visible');
    autocomplete.innerHTML = '';
});