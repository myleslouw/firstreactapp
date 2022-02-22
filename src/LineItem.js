import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, HandleCheck, HandleDelete}) => {
  return (
    <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={() => HandleCheck(item.id)}
                checked={item.checked}
                />

            <label 
                    style={(item.checked) ? {textDecoration:
                    'line-through'} : null}
                    onDoubleClick={() => HandleCheck(item.id)}
                >{item.item}</label>

            <FaTrashAlt
                onClick={() => HandleDelete(item.id)}
                role="button" 
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
  </li>
  )
}

export default LineItem