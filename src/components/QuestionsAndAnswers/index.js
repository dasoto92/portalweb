import React, { Component } from 'react';

//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'
import Category from './Category'

// Data
import items from '../../data/menu';
import categories from '../../data/category.json';

class QuestionsAndAnswers extends Component {

  render(){
    return(
      <div className="Content Body">
        <div className="row Body">
          <div className="col-3"><LeftMenu items={items} index={1} /></div>
          <div className="col-9"><Category categories={categories} /></div>        
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
