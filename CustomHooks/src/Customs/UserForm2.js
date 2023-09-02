import React from 'react'
import useInput from '../Hooks/useInput'

function UserForm2() {
    const [first, bindF, resetF] = useInput('')
    const [last, bindL, resetL] = useInput('')
    const Submit = e => {
  e.preventDefault()
  alert(`Submitted first name is ${first} and last is ${last}`)
  resetF()
  resetL()
    }
  return (
    <div>
        <h2>In useInput</h2>
      <form onSubmit={Submit}>
        <div>
            <label >First Name </label>
            <input {... bindF} type='text'/>
        </div>
        <div>
            <label >Last Name </label>
            <input {...bindL} type='text'/>
        </div>
        <button> Submit</button>
      </form>
    </div>
  )
}

export default UserForm2
