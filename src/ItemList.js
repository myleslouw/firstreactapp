import LineItem from "./LineItem"

const ItemList = ({items, HandleCheck, HandleDelete}) => {
return (
    <ul>
        {items.map((item) => (
            <LineItem
                key={item.id}
                item={item}
                HandleCheck={HandleCheck}
                HandleDelete={HandleDelete}
            />
        ))}
  </ul>
)
}

export default ItemList
