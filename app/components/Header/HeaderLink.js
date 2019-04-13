import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  margin: 0.5em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  padding: 1em 0;
  font-size: 12px;
  color: #ffffff;

  &:active {
    border-bottom: 1px solid #8b86f4;
  }

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin: 0.2em 1em;
    padding: 0.5em 0;
  }

  @media only screen and (max-width: 767px) {
    margin: 0.2em 1em;
    padding: 0.5em 0;
    color: #000;
    font-size: 24px;
  }
`;
