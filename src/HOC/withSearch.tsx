import React from "react";
import { peopleList } from '../PeopleTable/PeopleList';
import { Person } from "../Type";

interface withSearchProps {
  data: Person[]
}

const filterPerson = (searchTerm: string) => peopleList.filter((item: Person) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const withSearch = (WrappedComponent: React.ComponentType<withSearchProps>) => {
    class WithSearch extends React.Component {
      state = {
        searchTerm: ""
      };
      handleSearch = (event: { target: { value: string; }; }) => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;
        let filteredProducts: Person[] = filterPerson(searchTerm);
        
        return (
          <main className="containter">
            <div className="search__box">
            <input
              onChange={this.handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Search By Name"
              data-testid="searchInput"
              aria-label="searchNameInputBox"
              aria-required="true"
              tabIndex={0}
            />
            </div>

            <WrappedComponent data={filteredProducts} />
          </main>
        );
      }
    };
    return WithSearch;
  };