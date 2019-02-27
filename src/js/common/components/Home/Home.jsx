import React, { PureComponent } from 'react';

import { RecipeCard } from '../RecipeCard';

import styles from './Home.css';

class Home extends PureComponent {
  render() {
    console.log(this.props);
    const { home } = this.props;
    const recipes = home && home.recipes ? home.recipes : null;

    if (recipes && recipes.size && recipes.size > 0) {
      return (
        <div className={styles.exampleOutput}>
          <p>Recipes of the day</p>
          { this.renderCards(recipes.toJS()) }
        </div>
      );
    }
    return <div />;
  }

  renderCards(data) {
    return data.map(thisData => {
      return (
        <RecipeCard { ...thisData } />
      );
    });
  }
}

export default Home;
