/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';
import cx from 'classnames';
import Img from 'components/Img';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import CenteredSection from './CenteredSection';
import ContentSection from './ContentSection';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor(props) {
    super(props);
    this.categories = [
      {
        id: 1,
        label: 'Yoga',
      },
      {
        id: 2,
        label: 'Fitness',
      },
      {
        id: 3,
        label: 'Dance',
      },
      {
        id: 4,
        label: 'Pilates',
      },
    ];

    this.state = {
      selectedCategory: this.categories[0]
    }
  }

  changeClass = (category) => {
    this.setState({
      selectedCategory: category
    });
  }

  render() {

    const {
      selectedCategory
    } = this.state;


    return (
      <article>
        <Helmet>
          <title>Acko Fitness</title>
          <meta
            name="description"
            content="Acko Fitness Page"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <div className="wrapper">
              <div className='firstFoldWrapper'>
                <h1 className="title">Let us find your perfect <span className="subtitle">fitness</span> classes!</h1>
                <div className="searchWrapper">
                  <input className="inputSearch" type="text" name="search" placeholder="Enter your location" />
                  <button className="searchBtn">Search</button>
                </div>
              </div>
            </div>
          </CenteredSection>
          <ContentSection>
            <div className='categories'>
              {
                _.map(this.categories, (category) => {
                  const _className = cx('category', { 'active': category.id === selectedCategory.id })

                  return (
                    <div className={_className} onClick={() => this.changeClass(category)}>
                      <Img src={require(`images/${_.lowerCase(category.label)}.png`)} className='icon' />
                      <div className='text'>{category.label}</div>
                    </div>
                  )
                })
              }
            </div>
            <div className='cardsWrapper'>
              {
                _.times(8, (index) => {
                  return (
                    <div className='card'>
                      <div className="cardHeader">
                        <Img src={require('images/excercise.jpg')} className='cardImg' />
                        <div className="cardContent">
                          <div className="header">
                            Rapid Fat Burning
                          </div>
                          <div className="subHeader">
                            by <span>Alicia Reed</span>
                          </div>
                          <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci...
                          </div>
                        </div>
                      </div>
                      <div className="cardCenter">
                        <div className="details">
                          <div className='lhs'>Club: <span className='rhs'>Gold Gym</span></div>
                          <div className='lhs'>Members: <span className='rhs'>700</span></div>
                        </div>
                        <div className="reviews">
                          <div className="stars">
                            {_.times(5, (index) => {
                              return (
                                <FontAwesomeIcon
                                  icon={['fa', 'star']}
                                  size='xs'
                                  color={index < 3 ? '#f7dc6f' : '#d8d8d8'}
                                  className='star'
                                />
                              )
                            })}
                          </div>
                          <div className="review">
                            (21 reviews)
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <div className="userGroup">
                          {
                            _.times(3, (index) => {
                              return <Img src={require('images/face.png')} className='user' />
                            })
                          }
                          <div className='more'>+5</div>
                        </div>
                        <button className='scheduleBtn'>Schedule</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </ContentSection>
        </div>
      </article >
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
