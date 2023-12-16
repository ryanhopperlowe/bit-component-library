import React from 'react';
import { render } from '@testing-library/react';
import { BasicRhfSelect } from './rhf-select.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicRhfSelect />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
