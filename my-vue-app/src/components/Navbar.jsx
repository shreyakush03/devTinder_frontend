import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/baseurl'
import { removeUser } from '../utils/userSlice'

const Navbar = () => {
  const user = useSelector((store) => store.user) //it will get user from the store 
  const dispatch = useDispatch();
  const navigate = useNavigate();
;  console.log(user)
  const handleLogout = async () => {
    try {
      const res = await axios.post(BASE_URL + "/logout",
        {},
        { withCredentials: true });
        // clearing data from redux store
        dispatch(removeUser()) //clears the redux store and it automatically logout and redirect to the login page
return navigate("/login")
    } catch (err) {

    }

  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl">DevMeet</Link>
      </div>
      {user && (<div className="flex gap-2">Welcome, {user.firstName}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-6">
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>)}
    </div>
  )
}

export default Navbar
