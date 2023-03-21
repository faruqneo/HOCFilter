import React from 'react';
import { render, screen } from '@testing-library/react';
import Person from './Person';
import { peopleList } from '../PeopleTable/PeopleList'

const mockProps = {
    item: peopleList[0],
    index: 0,
    dispatch: jest.fn(),
    state: {
        selectedIndex: 0
    }
}

test('render Person component', () => {
  render(<Person {...mockProps} />);
  const linkElement = screen.getByTestId(peopleList[0].name);
  expect(linkElement).toBeInTheDocument();
});