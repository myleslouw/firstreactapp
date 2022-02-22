import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, HandleCheck, HandleDelete}) => {
  return (
    <li className="item">
            <input
                type="checkbox"
                onChange={() => HandleCheck(item.id)}
                checked={item.checked}
                />

            <label 
                    style={(item.checked) ? {textDecoration:
                    'line-through'} : null}
                    onDoubleClick={() => HandleCheck(item.id)}
                >{item.itemName}</label>

            <FaTrashAlt
                onClick={() => HandleDelete(item.id)}
                role="button" 
                tabIndex="0"
                aria-label={`Delete ${item.itemName}`}
            />
  </li>
  )
}

export default LineItem