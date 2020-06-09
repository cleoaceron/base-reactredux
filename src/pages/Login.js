import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../_actions'

const Login = () => {
  const dispatch = useDispatch()

  return <div>
      <h2>Login</h2>
      <p>This is a Login page!</p>

      <button onClick={() => dispatch(login())}>Log me in!</button>
   </div>
}

export default Login
