/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: #fff;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        defaultTitle="Acko Fitness"
      />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
