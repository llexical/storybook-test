import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-family: ${(props => props.theme.baseFontFamily)};
`;

class DropdownItem extends React.Component {

  render() {
    return (
      <ListItem>{this.props.name}</ListItem>
    )
  }
}


export default DropdownItem;