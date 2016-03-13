import React from 'react';
import { render } from 'react-dom';
// import Mongorito from 'mongorito';
import Header from './header.jsx';
import Main from './main.jsx';
import NewPost from './newpost.jsx';

// Mongorito.connect('ds019028.mlab.com:19028/blawg-data');

render(
  <div>
    <Header />
    <Main appTitle="Hello World" />
    <NewPost />
  </div>,
  document.getElementById('app')
);
