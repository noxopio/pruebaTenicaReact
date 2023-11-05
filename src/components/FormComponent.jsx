export const FormComponent = () => {
    return (

        <form>
            <div className="form-group">
                <label for="userName">user name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="uerser name" />
            </div>

            <div className="form-group">
                <label for="email1">Email address</label>
                <input type="email"
                    className="form-control"
                    name="email1"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
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
