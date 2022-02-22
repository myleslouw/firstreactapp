import ItemList from './ItemList';

const Content = ({items, HandleCheck, HandleDelete}) => {
    
    return (
    <main>
        {items.length ? (
            <ItemList
              items={items}
              HandleCheck={HandleCheck}
              HandleDelete={HandleDelete}
              />
        ) : (
          <p style={{marginTop: '2rem'}}> Your List is empty</p>
        )}
    </main>
  )
}

export default Content