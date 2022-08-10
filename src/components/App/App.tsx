import AppHeader from '../AppHeader/AppHeader'
import appStyles from '../App/App.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="page">
      <AppHeader />
      <section className={appStyles.wrapper}>
      <BurgerIngredients />
      <BurgerConstructor />
      </section>
    </div>
  );
}

export default App;
