import axios from "axios";
import * as t from "../types/types";

// fruit action
const buyFruit = () => {
  return {
    type: t.BUY_FRUIT,
  };
};

// vegetable action
const buyVegetable = () => {
  return {
    type: t.BUY_VEGETABLE,
  };
};

// fetch action
const fetchRequest = () => {
  return {
    type: t.FETCH_REQUEST,
  };
};

const fetchSuccess = (data) => {
  return {
    type: t.FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailure = (error) => {
  return {
    type: t.FETCH_FAILURE,
    payload: error,
  };
};

// fetch random user action
const fetchRandomUserRequest = () => {
  return {
    type: t.FETCH_RANDOM_USER_REQUEST,
  };
};

const fetchRandomUserSuccess = (users) => {
  return {
    type: t.FETCH_RANDOM_USER_SUCCESS,
    payload: users,
  };
};

const fetchRandomUserFailure = (error) => {
  return {
    type: t.FETCH_RANDOM_USER_FAILURE,
    payload: error,
  };
};

// increment / decrement action
const incrementPage = () => {
  return {
    type: t.INCREMENT_PAGE,
  };
};

const decrementPage = () => {
  return {
    type: t.DECREMENT_PAGE,
  };
};

// redux-thunk action
const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      dispatch(fetchSuccess(res.data))
    } catch (error) {
        dispatch(fetchFailure(error.message))
    }
  };
};

// redux-thunk random user fetch action


const fetchRandomUserData = (url) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRandomUserRequest);
      const res = await axios.get(url)
      dispatch(fetchRandomUserSuccess(res.data))
    } catch (error) {
        dispatch(fetchRandomUserFailure(error.message))
    }
  };
};

export { buyFruit, buyVegetable, fetchRequest, fetchSuccess, fetchFailure, fetchData, fetchRandomUserRequest, fetchRandomUserSuccess, fetchRandomUserFailure, fetchRandomUserData, incrementPage, decrementPage };
