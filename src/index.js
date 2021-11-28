import React from 'react';
import ReactDOM from 'react-dom';
import MyLayout from './layout/MyLayout'
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyLayout >
      </MyLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);