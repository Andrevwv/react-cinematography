import React from 'react';
import './SearchPage.scss';
import PreviewItem from '../../components/PreviewItem';
import store from '../../store';


const SearchPage = () => {
    const demo = {
        img: 'https://image.tmdb.org/t/p/w154/sG6n4ei1F0kVQtTs3fAjDghngpa.jpg',
        name: 'D.F./Distrito Federal',
        genre: 'Documentary / Music'
      }
    const demoItems = [demo];
    const prevArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z"></path></svg>;
    const nextArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"></path></svg>;
                console.log(store.getState())
    return (
        <div className="page-container">
            <section className="search-results">
             { demoItems.map(item => <PreviewItem key={item.name} object={item}/>) }
            </section>
            <div className="search-results-pagination">
                <button className="search-results-main-pagination__button">
                    {prevArrow}
                    Previous
                </button>
                <button className="search-results-main-pagination__button">
                    Next
                    {nextArrow}
                </button>
            </div>
            
        </div>
    )
}

export default SearchPage