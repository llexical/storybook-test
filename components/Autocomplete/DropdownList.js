import React from 'react';
import styled from 'styled-components';

const DropdownList = styled.ul`
  margin: 0;
  padding: 0 0 5px 0;
  font-family: ${(props => props.theme.baseFontFamily)};
  display: ${props => props.hidden ? 'none' : ''};
  box-shadow: ${(props => props.theme.baseBoxShadow)};
`

export default DropdownList;