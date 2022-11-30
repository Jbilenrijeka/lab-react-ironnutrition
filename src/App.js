import foods from './foods.json';
import {useState} from "react"
import './App.css';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search'

function App() {
  const [foodList, setFoodlist] = useState(foods)
  console.log(foodList)

  const createFood = (food) => {
    const newFood = [food, ...foodList];
    setFoodlist(newFood);
  };
  return (
    <div className="App">
      <Search/>
      <AddFoodForm createFood={createFood}/>
    {foodList.map((oneFood)=> (
      <FoodBox food={oneFood}/>
    ))}
    </div>
  );
}

export default App;
