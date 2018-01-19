import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import config from '../../config';
import TextInput from '../TextInput';
import Dropdown from './Dropdown';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: 'hidden',
      results: [],
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  async getLocations(location) {
    const res = await fetch(`${config.apiUrl}api/v2/locations/lookup?query=${location}&api_key=${config.apiKey}`);
    return await res.json();
  }

  async onInputChange(event) {
    const val = event.target.value;
    let hidden = 'hidden';

    if (val.length <= 2) {
      return this.setState({hidden});
    }

    // Get results
    const res = await this.getLocations(val);
    
    if (res.results.length) hidden = '';

    return this.setState({hidden, results: res.results});
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