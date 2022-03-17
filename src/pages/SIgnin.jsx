import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAuthAsync } from '../actions/authActions'

export default function Signin() {

    const dispatch = useDispatch()

    const {loading, error} = useSelector(state => state.status)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='form'>
      <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={ ()=> dispatch(fetchAuthAsync(username,password))} >
        { loading ? 'Loading...' : 'Signin' }
        </button>
        {error && <p>{error}</p>}
    </div>
  )
}
