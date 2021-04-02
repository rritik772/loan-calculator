import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const body = {username:username, password: password};

        console.log({body})
        const response = await fetch(`http://localhost:5000/get-user/${username}`,{
            method: 'GET',
            headers: {"Content-type": "application/json"}
        })
        const user = await response.json();

        if (user.password === password) {
            console.log("successful")
        }
        window.location="/App"
    }
    return (
        <div>
            <form className="mt-5" onSubmit={(e) => handleLogin(e)}>
                <div className="form-group bg-dark">
                    <label for="username" className="text-light">Username</label>
                    <input type="username" className="form-control bg-dark text-light" id="username" placeholder="Enter username" value={username} onChange={(e) => (setUsername(e.target.value))}/>
                </div>
                <div className="form-group">
                    <label for="password" className="text-light">Password</label>
                    <input type="password" className="form-control bg-dark text-light" id="password" placeholder="Password" value={password} onChange={(e)=>(setPassword(e.target.value))}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
