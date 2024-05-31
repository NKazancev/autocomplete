import { debouncer } from './utils.js';

export let repos;

async function getData(input, container) {
    const queryString = `q=${encodeURIComponent(input.value)}`;
    
    if (input.value.match(/[^\s]/g)) {
        const response = await fetch(`https://api.github.com/search/repositories?${queryString}`);
        const data = await response.json();
        if (data.items.length > 5) {
            repos = data.items.slice(0, 5);
        } else {
            repos = data.items;
        }

        const ul = document.createElement('ul');
        ul.classList.add('autocomplete__list');
        
        for (let item of repos) {
            const li = document.createElement('li');
            li.classList.add('autocomplete__item');
            li.textContent = item.full_name;
            ul.append(li);
            container.innerHTML = '';
            container.append(ul);
            container.classList.add('visible');
        }
    }
}

export const getRepos = debouncer(getData, 800);