import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Autocomplete from '../components/Autocomplete';


storiesOf('Button', module)
  .add('primary with text', () => (
    <ThemeProvider theme={theme}>
      <Button primary onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
  ))
  .add('primary with some emoji', () => (
    <ThemeProvider theme={theme}>
      <Button primary onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </ThemeProvider>
  ))
  .add('danger', () => (
    <ThemeProvider theme={theme}>
      <Button danger onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
  ));


storiesOf('Input', module)
  .add('search', () => (
    <ThemeProvider theme={theme}>
      <TextInput placeholder="Search by location or office name"></TextInput>
    </ThemeProvider>
  ));

storiesOf('Autocomplete', module)
  .add('default', () => (
    <Autocomplete />
  ));