import { FaPlus } from "react-icons/fa"

const AddItem = ({newItem, setNewItem, HandleSubmit}) => {
  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus               //the current element (you dont have to click before typing)
            id='addItem'            //the id of the input component
            type='text'             //the input type (not photos?)
            placeholder='Add Item'  //the greyed out bit
            required                //will give a popup if not filled
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit'aria-label='Add Item'> 
             <FaPlus/>        
            </button>  
    </form>
  )
}

export default AddItem