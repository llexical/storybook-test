import React from 'react';

import DropdownList from './DropdownList';

class Dropdown extends React.Component {

  render() {
    return (
      <DropdownList {...this.props}>
        <li>Hey</li>
      </DropdownList>
    )
  }
}

export default Dropdown;