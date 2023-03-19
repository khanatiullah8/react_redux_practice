import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRandomUserData, incrementPage, decrementPage } from '../redux/actions/actions'

let page;
const Gallery = (props) => {

  const fetchError = props.randomUsers.error;
  const users = props.randomUsers.users.results;
  const info = props.randomUsers.users.info;
  const currentPage = props.currentPage.page;
  page = currentPage

  useEffect(()=>{
    props.randomUserDispatch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


  return (
    <div>
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-control">
        <button onClick={()=>props.decNumDispatch()}>Prev</button>
        <span>{info?.page}</span>
        <button onClick={()=>props.incNumDispatch()}>Next</button>
      </div>
      <ul className="random-user-lists">
        {
        users && fetchError === '' ? users.map((user, i) => {
          const {gender, dob:{age}, location:{country}, name: {first, last}, picture:{medium}} = user;
          return <li key={i} className="random-user">
            <h3>Name: {first} {last}</h3>
            <h4>Gender: {gender}</h4>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <figure>
              <img src={medium} alt={`${first} ${last}`} />
            </figure>
          </li>
        }) : <li>{fetchError}</li>
      }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    randomUsers: state.users,
    currentPage: state.currentPage, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    randomUserDispatch: () => dispatch(fetchRandomUserData(`https://randomuser.me/api/?results=5&page=${page}`)),
    incNumDispatch: () => dispatch(incrementPage()),
    decNumDispatch: () => dispatch(decrementPage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
