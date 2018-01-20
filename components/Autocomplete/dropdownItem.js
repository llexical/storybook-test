import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0;
  padding: 7px 30px;
  font-family: ${(props => props.theme.baseFontFamily)};
  font-size: ${(props => props.heading ? '13px' : '15px')};
  cursor: pointer;
  ${props => props.heading ? 'pointer-events: none;': ''};

  &:hover {
    background-color: ${(props => props.theme.grey100)};
  }
`;

const Subtext = styled.span`
  color: ${(props => props.theme.grey500)};
  text-transform: uppercase;
  font-size: 11px;
  margin-left: 15px;
`

class DropdownItem extends React.Component {
  render() {
    return (
      <ListItem {...this.props}>
        {this.props.children}
        <Subtext>{this.props.subtext}</Subtext>
      </ListItem>
    )
  }
}


export default DropdownItem;