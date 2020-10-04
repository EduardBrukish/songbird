import React from 'react';
import { useSelector } from 'react-redux';
import BirdService from '../../services/bird-service';

import './Header.scss'

const Header = () => {

  const score = useSelector(state => state.app.score);
  console.log(score)
  const birdService = new BirdService();
  const categories = birdService.getCategories();
  const headerCategories = categories.map((item, index) => {
    let classes = "page-item  navigation__item";
    // if( questionNumber === index ) {
    //   classes += " active"
    // }
    return ( 
      <li className={ classes } key={ item }>
        <a className="page-link" href="#">{item}</a>
      </li>
    )
  })

  return(
    <div className="header">
    <div className="header__info">
      <h1 className="logotype">
        <span>Song</span>
        <span className="logotype_green">bird</span>
      </h1>
      <div className="score">
        <span>Score:</span>
        <span>{ score }</span>
      </div>
    </div>
    <nav>
      <ul className="pagination flex-wrap">
        { headerCategories }
      </ul>
    </nav>
  </div>
  )
}

export default Header;