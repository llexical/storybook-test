import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import TextInput from '../TextInput';
import theme from '../../theme';

class Autocomplete extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TextInput placeholder="Search by location or office name"/>
      </ThemeProvider>
    )
  }
}
export default Autocomplete