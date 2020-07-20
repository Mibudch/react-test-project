import React from 'react';
import ReactDOM from 'react-dom';
import MagicBall from './MagicBall/MagicBall'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MagicBall />,
  document.getElementById('root')
);

serviceWorker.unregister();
