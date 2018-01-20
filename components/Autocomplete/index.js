import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import debounce from 'lodash.debounce';

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
    this.debounceGetResults = debounce(this.getResults, 150);
  }

  async getLocations(location) {
    const res = await fetch(`${config.apiUrl}api/v2/locations/lookup?query=${location}&api_key=${config.apiKey}`);    
    return await res.json();

    // While on train lol
    // return JSON.parse(JSON.stringify(fixtures.locations));
  }

  /**
   * Gets the results via api call(s)
   * TODO: set this up to use an array of urls
   */
  async getResults() {
    const res = await this.getLocations(this.value);    
    this.setResults(res.results);
  }

  /**
   * Sets the results in the state and shows/hides the dropdown
   * 
   * @param {Array} results - Returns returned from the api call(s)
   */
  setResults(results) {
    // If there are results nolonger hide the dropdown.
    if (!results.length || this.value.length <= 2) {
      return this.setState({hidden: true, results: []});
    }
    // show/hide dropdown and set results
    return this.setState({hidden: false, results: results});
  }

  /**
   * Searches and sets the results.
   * Uses a debounce to make sure a user can type quickly
   * without spamming our api's and odd ui flashes.
   * 
   * @param {Event} event 
   */
  async onInputChange(event) {
    this.value = event.target.value;

    // Min length for searching is 2
    if (this.value.length <= 2) {
      return this.setState({hidden: true, results: []});
    }

    this.debounceGetResults();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TextInput onChange={this.onInputChange} placeholder="Search by location or office name"/>
          <Dropdown {...this.state}  />
        </div>
      </ThemeProvider>
    )
  }
}
export default Autocomplete