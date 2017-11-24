import {createSelector} from 'reselect'
// мемоизация

// геттеры для реселекста
// for articles
const filtersGetter = state => state.filter;
const articlesGetter = state => state.articles;
// for comments
const commentGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter , filtersGetter, (articles, filter) => {
  const {selected, dateRange: {from, to}} = filter;
  console.log('getting articles');

  let mapSelected = selected.map( select => select.value );

  return articles.filter( article => {
    let published = Date.parse(article.date);
    return (!mapSelected.length || mapSelected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
  });
})

export const commentsSelectorFactory = () => createSelector(
  commentGetter,
  idGetter,
  (comments, id) => {
    console.log('getting comments');
    return comments[id]
})
