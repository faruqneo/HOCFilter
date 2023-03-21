import React from 'react';
import { render, screen } from '@testing-library/react';
import NoPerson from './NoPerson';

test('render noDataFound component', () => {
  render(<NoPerson />);
  const linkElement = screen.getByTestId("noDataFound");
  expect(linkElement).toBeInTheDocument();
});