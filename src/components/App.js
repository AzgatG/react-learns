import React from 'react';
// components
import ArticleList from './ArticleList'
// import UserForm from './UserForm'
import Filter from './Filter'
import Counter from './Counter'


export default function App({articles}) {
  return (
    <div>
      {/*<Counter />*/}
      {/*<UserForm />*/}
      {<Filter />}
      <ArticleList />
    </div>
  );
}
