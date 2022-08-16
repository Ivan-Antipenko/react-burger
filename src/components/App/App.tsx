import { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader'
import appStyles from '../App/App.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { getData } from '../../utils/data'
import Modal from '../Modal/Modal';



function App() {

  const [data, setData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    setData({...data,  isLoading: true, isError: false});
    getData()
      .then((res) => {
        setData({data: res.data,  isLoading: false, isError: false });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
        setData({...data,  isLoading: false, isError: true })
      })
  }, []);


  const [IngridientModal, setIngridientModal] = useState(false);
  const [OrderModal, setOrderModal] = useState(false);

function openIngredientModal() {
  setIngridientModal(true)
}
  

function openOrderModal() {
  setOrderModal(true)
}

function closeModal() {
  setIngridientModal(false);
  setOrderModal(false);
};

  return (

    <div className="page">
      <AppHeader /> 

      {data.isLoading === true && (
        <h1 className={appStyles.message}>{`Загрузка...`}</h1>
      )}
        {data.isError && (
          <h1>{`Ой, кажется что-то пошло не так :c`}</h1>
        )}


      {!data.isLoading && !data.isError && (
        <main className={appStyles.wrapper}>
          <BurgerIngredients data={data.data} openModal={openIngredientModal} />
          <BurgerConstructor data={data.data} openModal={openOrderModal} />      
        </main>
      )}

      {OrderModal && (
        <Modal closeModal={closeModal} openModal={openOrderModal} >
          <OrderDetails closeModal={closeModal}/>
        </Modal>     
      )}
      {IngridientModal && (
        <Modal closeModal={closeModal} openModal={openOrderModal}>
          <IngredientDetails data={data.data[0]} closeModal={closeModal} />
        </Modal>     
      )}
    </div>
  );
}

export default App;
