import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [emailId, setEmailid] = useState("shreya@gmail.com")
  const [password, setPassword] = useState("Shreya@321")

  // function that will actually make an api call to login
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        password
      })
    }
    catch {
      console.error(err)
    }
  }

  return (
    <div className="flex items-center justify-center my-10">
      <div className="card card-border bg-base-300 w-96 flex items-center justify-center">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset w-68">
            <legend className="fieldset-legend">Email Id</legend>
            <input
              type="text"
              className="input"
              value={emailId}
              onChange={(e) => setEmailid(e.target.value)} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input px-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </fieldset>

          <div className="card-actions justify-end my-3">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
