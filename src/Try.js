import React, { Component } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SimpleTable from './TryAgain';


class App extends Component {

  render()
  {
    const theme = createMuiTheme();
    return (
      <MuiThemeProvider theme={theme}>
        <SimpleTable />
      </MuiThemeProvider>
    );
  }
  
}

export default App;
