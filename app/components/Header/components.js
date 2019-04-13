import styled from 'styled-components';

const UserImage = styled.div`

`;

const Profile = styled.div`

`;

const UserName = styled.text`
margin: 0.5em 0 0.5em 0;
user-select: none;
cursor: pointer;
outline: 0;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: bold;
padding: 1em 0;
font-size: 14px;
color: #ffffff;
opacity: 0.8;

@media only screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 12px;
  }
`;

const Logo = styled.div`
display: flex;
]width: 20px;
height: 20px;
`

const NavChild = styled.div`
display: flex;
align-items: center;
@media only screen and (max-width: 767px) {
  display: none;
}
`;

export {
  UserImage,
  UserName,
  Profile,
  Logo,
  NavChild
};
