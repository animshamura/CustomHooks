import React,{useState} from 'react'

function UserForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const Submit = e => {
  e.preventDefault()
  alert(`Submitted first name is ${firstName} and last is ${lastName}`)
    }
  return (
    <div>
      <form onSubmit={Submit}>
        <div>
            <label >First Name </label>
            <input valeue = {firstName} onChange={e => setFirstName(e.target.value)} type='text'/>
        </div>
        <div>
            <label >Last Name </label>
            <input value={lastName} onChange={e => setLastName(e.target.value)} type='text'/>
        </div>
        <button> Submit</button>
      </form>
    </div>
  )
}

export default UserForm
