import React from 'react';
import NavBar from './NavBar';
import cx from 'classnames';
import HeaderLink from './HeaderLink';
import { Profile, UserImage, Logo, UserName, NavChild } from './components';
import Img from './../Img';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addHeaderClass: false,
      closeNav: false
    }
  }

  componentDidMount() {
    const header = parseInt(this.refs.header.offsetHeight);
    window.addEventListener('scroll', this._calcScroll.bind(this, header));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calcScroll)
  }

  _calcScroll(h1) {
    var _window = window;
    var heightDiff = parseInt(h1);
    var scrollPos = _window.scrollY;
    if (scrollPos > heightDiff) {
      this.setState({
        addHeaderClass: true,
      });
    } else {
      this.setState({
        addHeaderClass: false,
      });
    }
  }

  handlePhoneMenuClick = () => {
    this.setState({
      closeNav: !this.state.closeNav
    });
  }

  render() {

    const _menuIconClass = cx('menuIcon', { 'close': this.state.closeNav });
    const _menuContainerClass = cx('mobileNav', {'open': this.state.closeNav});

    return (
      <div ref="header">
        <NavBar showDarkHeader={this.state.addHeaderClass}>
          <NavChild>
            <Img src={require('images/heart.png')} className='logo' />
            <div className='fit'>FIT<span className='me'>ME</span></div>
            <HeaderLink to="/">Schedule</HeaderLink>
            <HeaderLink to="/">Overview</HeaderLink>
            <HeaderLink to="/">Articles</HeaderLink>
          </NavChild>
          <NavChild>
            <Img src={require('images/notifications.png')} className='notification' />
            <Profile>
              <Img src={require('images/user.png')} className='userImage' />
              <UserName>John Doe</UserName>
            </Profile>
          </NavChild>
          <div className='mobileLogo'>
            <Img src={require('images/heart.png')} className='logo' />
            <div className='fit'>FIT<span className='me'>ME</span></div>
          </div>
          <div className={_menuIconClass} onClick={this.handlePhoneMenuClick}>
            <div className="menuIconmiddle"></div>
          </div>
          <div className={_menuContainerClass}>
            <HeaderLink onClick={this.handlePhoneMenuClick} to="/">Schedule</HeaderLink>
            <HeaderLink onClick={this.handlePhoneMenuClick} to="/">Overview</HeaderLink>
            <HeaderLink onClick={this.handlePhoneMenuClick} to="/">Articles</HeaderLink>
          </div>
        </NavBar>
      </div>
    );
  }
}

export default Header;
