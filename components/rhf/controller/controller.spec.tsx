import React from 'react';
import { render } from '@testing-library/react';
import { BasicController } from './controller.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicController />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
