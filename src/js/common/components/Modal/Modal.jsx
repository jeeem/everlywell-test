import React, { PureComponent } from 'react';

import styles from './Modal.css';

class Modal extends PureComponent {
  render() {
    let parsedRecipe = null;
    if (!this.props.modal.recipe) {
      return null;
    }
    parsedRecipe = this.props.modal.recipe.toJS();
    const { strMeal, strMealThumb } = parsedRecipe;
    const inlineStyle = {
      backgroundImage: `url('${strMealThumb}')`
    };
    return (
      <div className={styles.modal}>
        <div className={styles.modalImage} style={inlineStyle}></div>
        <h1 className={styles.modalName}>{strMeal}</h1>
        { this.renderIngredients(parsedRecipe) }
        <h1 className={styles.modalName}>Directions</h1>
        <p>{parsedRecipe.strInstructions}</p>
      </div>
    );
  }
  renderIngredients(recipeObj) {
    let ingArray = [];
    let ingIndex;
    for (ingIndex = 1; ingIndex < 21; ingIndex++) {
      if (recipeObj[`strIngredient${ingIndex}`]) {
        ingArray.push(<p>{recipeObj[`strIngredient${ingIndex}`]}</p>);
      } else {
        ingIndex = 21;
      }
    }
    return ingArray;
  }
}

export default Modal;
