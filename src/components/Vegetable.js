import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyVegetable } from "../redux/actions/actions";

const Vegetable = () => {
  const vegetables = useSelector((state) => state.vegetable.totalVegetable);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="section-title">Vegetable Shop</h2>
      <p>Total Vegetables in Stock : {vegetables < 1? "Out of Stock!" : vegetables}</p>
      <button onClick={()=> dispatch(buyVegetable())} style={{backgroundColor: `${vegetables > 0? '#008b8b': '#555'}`, pointerEvents: `${vegetables < 1? 'none' : 'auto'}`}}>Click to Buy 1</button>
    </div>
  );
};

export default Vegetable;
