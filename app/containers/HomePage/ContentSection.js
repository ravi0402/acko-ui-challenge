import styled from 'styled-components';
import Section from './Section';

const ContentSection = styled(Section)`
  text-align: center;
  margin: 0 auto;
  height: 450px;
  padding: 0 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  object-fit: cover;

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    padding: 0 100px;
  }

  @media only screen and (max-width: 768px) and (min-width: 320px) {
    padding: 0 40px;
  }
`;

export default ContentSection;
