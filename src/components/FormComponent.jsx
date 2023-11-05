import { useState } from "react"

export const FormComponent = () => {

const[formState,setFormState]=  useState({
userName:'Nox Opio',
email: 'dark.tempus@gmail.com',
password:'999999'


})


const {userName,email,password }=formState

const onInputChange= ({target})=>{  
    const {name,value}= target
    setFormState({...formState})
}


    return (

        <form>
            <div className="form-group">
                <label htmlFor="userName">user name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="uerser name"
                    value={userName} 
                    onChange={onInputChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-check">
            </div>
            <button type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>




    )
}
