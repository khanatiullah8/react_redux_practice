import React from "react";
import { buyFruit } from "../redux/actions/actions";
import { connect } from "react-redux";

const Fruit = (props) => {
  let totalRemain = props.remainingFruits;
  return (
    <div>
      <h2 className="section-title">Fruit Shop</h2>
      <p>Total Fruits in Stock : {totalRemain < 1? "Out of Stock!" : props.remainingFruits}</p>
      <button onClick={()=>props.clickToBuyFruit()} style={{backgroundColor: `${totalRemain > 0? '#008b8b': '#555'}`, pointerEvents: `${totalRemain < 1? 'none' : 'auto'}`}}>Click to Buy 1</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    remainingFruits: state.fruit.totalFruit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickToBuyFruit: ()=> dispatch(buyFruit())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Fruit);
