import React from 'react';

import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';

class Dropdown extends React.Component {

  render() {
    return (
      <DropdownList {...this.props}>
        {this.props.results.map((result) => {
          return <DropdownItem {...result} />;
        })}
      </DropdownList>
    )
  }
}

export default Dropdown;