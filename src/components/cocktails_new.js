import React from 'react';
import * as actions from '../actions/index';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CocktailsNew extends React.Component {
  constructor(props) {
    super(props);

    this.newCocktailHandler = this.newCocktailHandler.bind(this);
  }

  newCocktailHandler(event){
    event.preventDefault();
    let newCocktail = {cocktail: {name: this.refs.name.value, description: this.refs.description.value, instructions: this.refs.instruction.value}};
    this.props.actions.createCocktail(newCocktail);
  }

  render(){
    return (
      <form onSubmit={this.newCocktailHandler}>
        <label>Name: </label>
        <input type="text" ref="name" /><br/>
        <label>Description: </label>
        <input type="text" ref="description" /><br/>
        <label>Instructions: </label>
        <textarea ref="instruction" /><br/>
        <input type="submit"/>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CocktailsNew)
