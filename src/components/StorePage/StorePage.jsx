import { useEffect, useState } from "react";
import "./store.css";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch } from "react-redux";
import allActions from "../../actions";


export default function StorePage() {
  const [data, setData] = useState([])
  const apiCall = async (params) => {
    const response = await axios.get('https://dummyjson.com/products')
    setData(response.data.products)
  }
  console.log(data)
  useEffect(() => {
    apiCall()
  }, [])

const dispatch = useDispatch()
const add = (params) => {
  dispatch(allActions.cardAction())
}


  return (
    <>
      <div className="container">
        {data.map((data) => {
          return (
            <div className="items">
              <SimpleImageSlider
                width={400}
                height={300}
                images={data.images}
                showBullets={true}
                showNavs={true}
              />
              <h1>{data.title}</h1>
              <p>{data.id}</p>
              <p>{data.description}</p>
              <p>{data.price}</p>
              <p>{data.discountPercentage}</p>
              <button onClick={add}>Add to cart</button>
            </div>
          )
        })}
      </div>
    </>
  );
}
