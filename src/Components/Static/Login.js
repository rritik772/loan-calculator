import React from 'react'

function Login() {
    return (
        <div>
            <form className="mt-5" onSubmit={handleSignup}>
                <div className="form-group bg-dark">
                    <label for="username" className="text-light">Username</label>
                    <input type="username" className="form-control bg-dark text-light" id="username" placeholder="Enter username" value={username} onChange={(e) => (setUsername(e.target.value))}/>
                </div>
                <div className="form-group">
                    <label for="password1" className="text-light">Password</label>
                    <input type="password" className="form-control bg-dark text-light" id="password1" placeholder="Password" value={password1} onChange={(e)=>(setPassword1(e.target.value))}/>
                </div>
                <div class="form-group">
                    <label for="password2" className="text-light">Password</label>
                    <input type="password" className="form-control bg-dark text-light" id="password2" placeholder="Confirm Password" value={password2} onChange={(e)=>(setPassword2(e.target.value))}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
