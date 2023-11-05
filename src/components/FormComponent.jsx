<<<<<<< HEAD
export const FormComponent = () => {
    return (

        <form>
=======
import { useForm } from "../hooks/useForm"

export const FormComponent = () => {

const initialForm = { userName:'nox opio ',  email: 'Dark.tempus@gmail ', password:'99999 '   
    
    }



const {formState,onInputChange }= useForm(initialForm)
const {userName,email,password }=formState
    const onSubmit=(event)=>{
        event.preventDefault()
    
    console.log(formState)
    
    }   
    return (

        <form className="form-container" onSubmit={onSubmit}>
>>>>>>> dev
            <div className="form-group">
                <label htmlFor="userName">user name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
<<<<<<< HEAD
                    placeholder="uerser name" />
            </div>

            <div className="form-group">
                <label htmlFor="email1">Email address</label>
                <input type="email"
                    className="form-control"
                    name="email1"
                    placeholder="Enter email"
=======
                    placeholder="user name"
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
>>>>>>> dev
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
<<<<<<< HEAD
                />
            </div>
            <div className="form-check">
            </div>
=======
                    value={password}
                    onChange={onInputChange}
                />
            </div>
           
>>>>>>> dev
            <button type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>

<<<<<<< HEAD



    )
=======
)
>>>>>>> dev
}
