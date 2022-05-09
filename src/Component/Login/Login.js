import React from 'react';
const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <form onSubmit={handleLogin} style={{ width: '50%', margin: '20px auto' }}>
                <input className='bg-slate-200 px-2 outline-none' style={inputStyle} type="email" name="email" placeholder='Email' />
                <br />
                <input className='bg-slate-200 px-2 outline-none' style={inputStyle} type="password" name="password" placeholder='Password' />
                <br />
                <input className='bg-cyan-600 px-4 py-[3px] rounded' type="submit" value="Login" />
        </form>
        </div>
    );
};

export default Login;