import React from 'react';
// components
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Calendar from './Calendar'
import HandleSelect from './HandleSelect'


export default function App({articles}) {
  return (
    <div>
      <UserForm />
      <Calendar />
      <HandleSelect articles={articles} />
      <ArticleList articles={articles} />
    </div>
  );
}
