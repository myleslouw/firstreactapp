import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer  from './Footer';
import { useState } from "react";

function App() {
  
    const [items, setItems] = useState([
      {
        id: 1,
        checked: true,
        itemName: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        itemName: "Item 2"
    },
    {
        id: 3,
        checked: false,
        itemName: "Item 3"
    }
    ]);

    const HandleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item, 
      checked: !item.checked} : item);
      setItems(listItems);
      localStorage.setItem('ShoppingList', JSON.stringify(listItems));
  }

  const HandleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems);
      localStorage.setItem('ShoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      
      <AddItem/>

      <Content 
        items = {items}
        HandleCheck = {HandleCheck}
        HandleDelete = {HandleDelete}
        />

      <Footer length={items.length}/>
    </div>
  );
}

export default App;
