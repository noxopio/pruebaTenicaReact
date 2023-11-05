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
            <div className="form-group">
                <label htmlFor="userName">user name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
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
           
            <button type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>

)
}
