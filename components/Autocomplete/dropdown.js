import React from 'react';

import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';

class Dropdown extends React.Component {

  render() {
    return (
      <DropdownList hidden={this.props.hidden}>
        <DropdownItem heading>Locations</DropdownItem>
        {this.props.results.slice(0, 4).map((result) => {
          return (
            <DropdownItem key={result.id} subtext={result.description.split(' ')[0]}>
              {result.name}
            </DropdownItem>
          );
        })}
      </DropdownList>
    )
  }
}

export default Dropdown;