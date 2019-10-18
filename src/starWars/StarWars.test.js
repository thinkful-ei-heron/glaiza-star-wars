import React from 'react';
import ReactDOM from 'react-dom';
import StarWarsSearch from './StarWarsSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarWarsSearch results={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
