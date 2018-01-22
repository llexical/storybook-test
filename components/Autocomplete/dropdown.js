import React from 'react';
import DOMPurify from 'dompurify';

import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';

class Dropdown extends React.Component {

  highlight(title, value) {
    var re = new RegExp(value.trim()  , 'g');
    return title.replace(re, `<b>${value.trim()}</b>`);
  }

  render() {
    return (
      <DropdownList hidden={this.props.hidden}>
        <DropdownItem heading>Locations</DropdownItem>
        {this.props.results.slice(0, 4).map((result) => {
          return (
            <DropdownItem 
              key={result.id} 
              tag={result.description.split(' ')[0]}
              onClick={this.props.onSelect.bind(this, result)}
            >
              <span dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(this.highlight(result.name, this.props.value))
              }}></span>
            </DropdownItem>
          );
        })}
      </DropdownList>
    )
  }
}

export default Dropdown;