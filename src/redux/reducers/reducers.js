import * as t from "../types/types";

// ================= fruit Reducer ================ //
let initialFruit = {
  totalFruit: 10,
};

const fruitReducer = (state = initialFruit, action) => {
  switch (action.type) {
    case t.BUY_FRUIT: {
      let totalRemain = state.totalFruit - 1;
      return {
        ...state,
        totalFruit: totalRemain < 1 ? 0 : totalRemain,
      };
    }
    default:
      return state;
  }
};

// ================= vegetable Reducer ================ //

let initialVegetable = {
  totalVegetable: 15,
};

const vegetableReducer = (state = initialVegetable, action) => {
  switch (action.type) {
    case t.BUY_VEGETABLE: {
      let totalRemain = state.totalVegetable - 1;
      return {
        ...state,
        totalVegetable: totalRemain < 1 ? 0 : totalRemain,
      };
    }
    default:
      return state;
  }
};

// ================= API fetch Reducer ================ //

let initialData = {
  loading: false,
  data: [],
  error: '',
};

const apiFetchReducer = (state = initialData, action) => {
  switch (action.type) {
    case t.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case t.FETCH_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    }
    case t.FETCH_FAILURE: {
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

// ================= Random User API fetch Reducer ================ //

let initialRandomUserData = {
  loading: false,
  users: [],
  error: '',
};

const randomUserApiFetchReducer = (state = initialRandomUserData, action) => {
  switch (action.type) {
    case t.FETCH_RANDOM_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case t.FETCH_RANDOM_USER_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    }
    case t.FETCH_RANDOM_USER_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

// ================= increment / decrement Reducer ================ //

let initialPage = {
  page: 1,
};

const incDecReducer = (state = initialPage, action) => {
  switch (action.type) {
    case t.INCREMENT_PAGE: {
      let mPage = state.page + 1;
      return {
        ...state,
        page: mPage,
      };
    }
    case t.DECREMENT_PAGE: {
      let mPage = state.page - 1;
      return {
        ...state,
        page: mPage < 1 ? 1 : mPage,
      };
    }
    default:
      return state;
  }
};


export { fruitReducer, vegetableReducer, apiFetchReducer, randomUserApiFetchReducer, incDecReducer };
