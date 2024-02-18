import { render } from '@testing-library/react';
import React from 'react';

import { Navbar } from '../components/nav';

test('renders Navbar', () => {
  const { getByRole } = render(<Navbar />);
  const navbar = getByRole('navigation');
  expect(navbar).toBeInTheDocument();
});
