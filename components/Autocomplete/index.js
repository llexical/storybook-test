import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import config from '../../config';
import fixtures from '../../fixtures';

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

    // While on train lol
    // return JSON.parse(JSON.stringify(fixtures.locations));
  }

  /**
   * Searches for the correct location
   * Shows & hides the dropdown 
   * 
   * @param {Event} event 
   */
  async onInputChange(event) {
    const val = event.target.value;
    let hidden = 'hidden';

    console.log(val);

    if (val.length <= 2) {
      return this.setState({hidden});
    }

    // Get results
    const res = await this.getLocations(val);
    console.log('results', res);
    
    // If theree are results nolonger hide the dropdown.
    if (res.results.length && val.length > 2) hidden = '';
    // show/hide dropdown and set results
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