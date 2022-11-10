// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div>
            <p>{props.item.name}</p>
            <div className="img">
                <img src ={props.item.image}></img>
            </div>
            <button onClick = {() => props.updateCart(props.index)}>add to cart</button>
        </div>
      
    )
  }