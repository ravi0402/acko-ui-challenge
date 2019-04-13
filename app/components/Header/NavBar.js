import styled from 'styled-components';

export default styled.div`
  text-align: flex-start;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
  padding: 0 180px;
  z-index: 999;
  justify-content: space-between;
  position: fixed;
  transition: 200ms background-color ease-in-out;
  ${({ showDarkHeader }) => showDarkHeader && `
      background-color: rgba(0,0,0, 0.8);
  `}

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    padding: 0 100px;
  }
`;
