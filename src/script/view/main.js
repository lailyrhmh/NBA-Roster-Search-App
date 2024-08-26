import '../component/player-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const foodListElement = document.querySelector('player-list');
    
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.search(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };
    
    const renderResult = results => {
        foodListElement.players = results;
    };
    
    const fallbackResult = message => {
        foodListElement.renderError(message);
    };
    
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
