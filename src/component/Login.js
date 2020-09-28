import React from 'react'

export default function Login(props) {
  
   const handleSubmit=(event)=>{
       event.preventDefault()
       props.handleLogin({login:true})
   }
    return (
        <div>
           <div className="container p-5">
           <h1 className="text-center mb-3">Login</h1>
                <div className="wrapper m-auto">
                    
                  <form action="" onSubmit={handleSubmit}>
                      <div className="from-group mt-3">
                          <label htmlFor="">E-mail</label>
                          <input type="text" placeholder=" email" className="form-control"/>
                      </div>
                      <div className="from-group mt-3">
                          <label htmlFor="">Password</label>
                          <input type="password" placeholder="Password" className="form-control"/>
                      </div>
                      <div className="from-group">
                         
                          <input type="submit" value="Login" className="form-control mt-5"/>
                      </div>
                  </form>
                </div>
           </div>
        </div>
    )
}
