import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Board link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Board/i);
  expect(linkElement).toBeInTheDocument();
});
