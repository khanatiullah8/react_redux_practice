import React, { useEffect } from 'react'
import { fetchData } from '../redux/actions/actions'
import { useSelector, useDispatch } from "react-redux";

const Users = () => {

  const users = useSelector((state) => state.data.data);
  const fetchError = useSelector((state) => state.data.error);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData());
  }, [])

  return (
    <div>
      <h2 className="section-title">User's List</h2>
      <div>
        {
          (users && fetchError === "" )? users.map(user => {
            const {id, name} = user;
            return <p key={id}>{id} ---- {name}</p>
          }) : <p>{fetchError}</p>
        }
      </div>
    </div>
  )
}

export default Users