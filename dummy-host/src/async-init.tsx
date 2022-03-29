import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import 'hello-world-widget';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  padding: 1rem 2rem;
`;

const Header = styled.header`
  box-shadow: 0 0.5em 1em 0.2em rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 1.2em;
`;

const WidgetContainer = styled.div`
  width: 100%;
  height: 35em;
  box-shadow: 0 0.5em 1em 0.2em rgba(0, 0, 0, 0.5);
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <Header>
      <Container>Dummy host</Container>
    </Header>
    <Container>
      <WidgetContainer>
        <fwd-hello-world-widget />
      </WidgetContainer>
    </Container>
  </>,
  document.getElementById('root'),
);
