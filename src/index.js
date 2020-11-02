import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


window.addEventListener('orientationchange', 
function () {
  var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
  document.body.style.display='none';
  setTimeout(function () 
  {
    document.body.style.display = originalBodyStyle;
  }, 10);
})

ReactDOM.render(

  <React.StrictMode>

  <div className="Animation-Div x"><div className="Animation-Img y"></div></div>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);


