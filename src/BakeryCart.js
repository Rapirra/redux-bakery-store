import Card from 'react-bootstrap/Card'
import React, {  useEffect,  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import C from './constants'
 function BakeryCart({store}) {
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const [select, setSelect ] = useState()
  
  // const { bakeries } = store.getState()
  // const cards = [...bakeries]
  // const { cartActions} = store.getState()
  // const cart = [...cartActions]
  
  //dispatch({     type: C.SHOW_CARD,     payload: {       id: value.id,       category: value.category,       title: value.title,       image: value.image,        count: 1     }})
  const cards = useSelector(state => state.bakeries)
  const [cardsClone,setCardsClone] = useState([])
  const showCard = useSelector(state=> state.cartActions)
  
 
  
  const addToCart = (value) => {    
    if(showCard.some(product => product.id === value.id)){
      console.log('includes')
    } else {
        dispatch({     
          type: C.SHOW_CARD,     
          payload: {       
            id: value.id,       
            category: value.category,       
            title: value.title,       
            image: value.image,        
            count: 1,
            price: value.price     
        }})
    }
  }
  let price = 0
  const getTotal = () => {
    showCard.forEach(element => {
      price += (element.count*element.price)
    });
    setTotal(price)
  } 

  useEffect(() => {
    window.addEventListener('click', getTotal())
  })
 
  const removeFromCart = (value) => {
    dispatch({
      type: C.REMOVE_FROM_CART,
      payload: value.id
    })
  }

  const addCount = (value) => {    
    
    dispatch({
      type: C.ADD_COUNT,
      payload: value
    })
   
    
  }
  const decreaseCount = (value) => {
    dispatch({
      type: C.DECREASE_COUNT,
      payload: value
    })
  }

  const filterProduct = (value) => {    
    console.log(value)
    console.log(cards)
    setCardsClone(cards.filter(product => product.category === value))
    dispatch({
      type: C.FILTER_PRODUCTS,
      payload: cardsClone
    })
    console.log(cards)
    console.log(cardsClone)
  }
  
  return (
    <div className='BakeryCart'>
      {/* <button  value={cakes} onClick={() => filterProduct(value)}>CAKES</button> */}
       <Form.Select aria-label="Default select example" onChange={e => setSelect(e.target.value)} >
          <option >Open this select menu</option>
          <option value={"cakes"} onClick={() => filterProduct(select)}>Cakes</option>
          <option value={"tartalettes"} onClick={() => filterProduct(select)}>Tartalettes</option>
          <option value={"biscuits"} onClick={() => filterProduct(select)}>Biscuits</option>
          <option value={"pie"} onClick={() => filterProduct(select)}>Pies</option>
        </Form.Select>
      <div >
        {
          cardsClone.length > 0 ?
          <div style={{  display: "grid", gridTemplateColumns: "1fr 1fr 1fr ", margin: "40px auto", width: "900px"}} >
              {
                cardsClone.map((card) => (
                  <div className="container" key={card.id}>
                    <button onClick={() => addToCart(card)}>Add To Cart</button>
                    <Card style={{   width: '200px'}} key={card.id}>
                      <Card.Img style={{ width: '200px'}}variant="top" src={card.image} />
                      <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                          {card.price}$
                        </Card.Text>
                      </Card.Body>
                </Card>
                  </div>            
                ))
              }
            </div>
          :
            <div style={{  display: "grid", gridTemplateColumns: "1fr 1fr 1fr ", margin: "40px auto", width: "900px"}} >
              {
                cards.map((card) => (
                  <div className="container" key={card.id}>
                    <button onClick={() => addToCart(card)}>Add To Cart</button>
                    <Card style={{   width: '200px'}} key={card.id}>
                      <Card.Img style={{ width: '200px'}}variant="top" src={card.image} />
                      <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                          {card.price}$
                        </Card.Text>
                      </Card.Body>
                </Card>
                  </div>            
                ))
              }
            </div> 
            }
        </div>
      
        <div className="cart" style={{margin: "40px auto", width: "900px"}}>
        <h1>Cart2</h1>                  
            {      
              showCard.length > 0 ?
              <div>
                {
                <div className="show" style={{display: "flex", flexDirection: "row"}}>        {   
                  showCard.map((show) => (                
                    <div key={show.id} >                  
                         
                      <button onClick={() => removeFromCart(show)}>Remove</button>                     
                      <Card className="flex" style={{display: "flex", flexDirection: "row", marginRight: "20px"}}  >
                        <Card.Img style={{ width: '200px'}}variant="top" src={show.image} />
                        <Card.Body>
                          <Card.Title>{show.title}</Card.Title>                          
                          <button onClick={() => addCount(show)} >More</button> 
                          <h3>{show.count}</h3> 
                          <button onClick={() => decreaseCount(show)}>Less</button>                             
                        </Card.Body>
                                                  
                      </Card>   
                      <h3>Total: {show.price * show.count}</h3>          
                    </div>              
                  ))}
                  </div>
                }
                <h2>{total}</h2>
              </div>              
              :
              <div>
                <h1>Cart is empty</h1>
              </div>
            }     
          </div>          
            
    </div>
    
  )
}


export default BakeryCart
