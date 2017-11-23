import {createSelector} from 'reselect'


const filtersGetter = state => state.filter;
const articlesGetter = state => state.articles;

export const filtratedArticlesSelector = createSelector(articlesGetter , filtersGetter, (articles, filter) => {
  const {selected, dateRange: {from, to}} = filter;
  console.log('----', 'recomputing');
  let mapSelected = selected.map( select => select.value );

  return articles.filter( article => {
    let published = Date.parse(article.date);
    return (!mapSelected.length || mapSelected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
  });
})
