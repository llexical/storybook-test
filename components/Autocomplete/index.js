import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import TextInput from '../TextInput';
import Dropdown from './Dropdown';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: 'hidden',
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    if (event.target.value.length < 2)
      return this.setState({hidden: 'hidden'});

    return this.setState({hidden: ''});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TextInput onChange={this.onInputChange} placeholder="Search by location or office name"/>
          <Dropdown {...this.state} />
        </div>
      </ThemeProvider>
    )
  }
}
export default Autocomplete