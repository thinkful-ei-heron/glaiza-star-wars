import React from 'react';
import ReactDOM from 'react-dom';
import StarWars from './StarWars';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarWars />, div);
  ReactDOM.unmountComponentAtNode(div);
});
