import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssStyle={ };

const date=new Date();
const hour=date.getHours();
var greet='';

if(hour>=1 && hour<12)
{
  greet='Good Morning';
  cssStyle.color='green';
}
else if(hour>=12 && hour<19)
{
  greet='Good Afternoon';
  cssStyle.color='orange';
}
else
{
  greet='Good Night';
  cssStyle.color='black';
}

ReactDOM.render(
  <>
    <div>
      <h1 className="heading">Hello sir, <span style={cssStyle}>{greet}</span></h1>
    </div>
  </>,
  document.getElementById('root')
);