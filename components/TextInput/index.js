import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  padding: 5px 50px;
  margin-right: 40px;
  font-weight: 600;
  color: ${(props => props.theme.brandGrey)};
  width: 100%;
  height: 59px;
  border: none;
  font-family: ${(props => props.theme.baseFontFamily)};
  font-size: 15px;
  line-height: 1.6;
  outline: none;
`;

export default TextInput