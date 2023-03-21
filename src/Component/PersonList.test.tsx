import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonList from './PersonList';
import { peopleList } from '../PeopleTable/PeopleList'

const mockProps = {
    data: peopleList
}

test('render PersonList component', () => {
  render(<PersonList {...mockProps} />);
  const linkElement = screen.getByTestId('user__list');
  expect(linkElement).toBeInTheDocument();
});