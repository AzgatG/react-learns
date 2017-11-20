import React from 'react';
// components
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Calendar from './Calendar'
import HandleSelect from './HandleSelect'
import Counter from './Counter'


export default function App({articles}) {
  return (
    <div>
      <Counter />
      <UserForm />
      <Calendar />
      <HandleSelect articles={articles} />
      <ArticleList articles={articles} />
    </div>
  );
}
