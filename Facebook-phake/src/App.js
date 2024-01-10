// App.js
import React from 'react';
import { Container } from './Layout';
import Header from '../Component';
import PostList from '../Component/Postlist';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <PostList />
      </Container>
    </>
  );
};

export default App;
