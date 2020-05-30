import React, { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core';

import Router from '../router';
import configureStore from '../store/configureStore';
import { getSetting } from '../reducers';
import { darkTheme, lightTheme } from '../utils/themes';

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    padding: 0,
    margin: 0,
  },
});

const Themed = () => {
  const classes = useStyles();
  const isDark = useSelector(getSetting('isDark'));
  const theme = useMemo(
    () =>
      createMuiTheme(
        isDark
          ? darkTheme
          : lightTheme
      ),
    [isDark],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.content}>
          <Router />
        </div>
      </div>
    </ThemeProvider>
  );
}

const App = () => {
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <Themed />
    </Provider>
  );
};

export default App;
