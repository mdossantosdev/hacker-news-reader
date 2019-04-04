import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from '../../styles/palette';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>

        </div>
      </ThemeProvider>
    )
  }
}

export default App;
