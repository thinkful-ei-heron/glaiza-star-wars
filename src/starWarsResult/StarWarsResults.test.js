import React from 'react';
import ReactDOM from 'react-dom';
import StarWarsResults from './StarWarsSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarWarsResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});
