import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'
// мемоизация

// геттеры для реселекста
// for articles
const filtersGetter = state => state.filter;
const articlesGetter = state => state.articles.entities;
// for comments
const commentGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter , filtersGetter, (articles, filter) => {
  const {selected, dateRange: {from, to}} = filter;

  let mapSelected = selected.map( select => select.value );

  return mapToArr(articles).filter( article => {
    let published = Date.parse(article.date);
    return (!mapSelected.length || mapSelected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
  });
})

export const commentsSelectorFactory = () => createSelector(
  commentGetter,
  idGetter,
  (comments, id) => {
    return comments.get(id)
})
