import React from 'react';
import { render } from '@testing-library/react';
import { BasicRhfInput } from './rhf-input.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicRhfInput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
