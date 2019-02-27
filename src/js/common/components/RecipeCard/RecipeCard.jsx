import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './RecipeCard.css';

class RecipeCard extends PureComponent {
  render() {
    const { strMeal, strMealThumb } = this.props;
    const inlineStyle = {
      backgroundImage: `url('${strMealThumb}')`
    };
    const thisLink = `/${strMeal}`;
    return (

      <Link to={thisLink}>
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{strMeal}</h1>
          <div className={styles.recipeImage} style={inlineStyle}></div>
        </div>
      </Link>
    );
  }
}

export default RecipeCard;
