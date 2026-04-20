import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Todo } from './MyComponents/TodoItems';

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Yo  need to go to the ma ket to buy food"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You leed to go to the gym to stay fit"
    },
    {
      sno: 3,
      title: "Go to the office",
      desc: "You need to go to the office to earn money"
    },
    {
      sno: 4,
      title: "Go to the park",
      desc: "You need to go to the park to relax"
    }
  ]

  return (
    <>
      <Header title="Todo List App" searchbar={true} />
      <Todos todos={Todos}/>
      <Footer />
    </>
  );
};

export default App;