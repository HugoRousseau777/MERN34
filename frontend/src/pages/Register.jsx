//import e from 'express'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const {name, email, password, password2} = formData
    const onChange = () => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <section className="heading">
            <h1>
                <FaUser/> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" 
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Add your name'
              onChange= {onChange}
              />  
            </div>
            <div className="form-group">
              <input type="text" 
              className='form-control'
              id='email' 
              name='email'
              value={email}
              placeholder='Add your name'
              onChange= {onChange}
              />  
            </div>
            <div className="form-group">
              <input type="password" 
              className='form-control'
              id='password'
              name="name"
              value={password}
              placeholder='Add your password'
              onChange= {onChange}
              />  
            </div>
            <div className="form-group">
              <input type="password" 
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Rewrite your password'
              onChange= {onChange}
              />  
            </div>
            <div className="form-group">
                <button type='submit' className="btn btn-block">
                    Submit
                </button>
            </div>
            </form>
        </section>
        </>
    )
}

export default Register
