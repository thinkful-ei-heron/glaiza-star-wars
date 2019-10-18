import React from 'react';
import ReactDOM from 'react-dom';
import StarWarsResults from './StarWarsResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarWarsResults results={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
