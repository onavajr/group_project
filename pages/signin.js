import Head from 'next/head'
import Link from 'next/link'

const Signin = () => {
    return(
      <div>
        <Head>
          <title>Signin Page</title>
        </Head>

        <form className="mx-auto my-4" style={{maxWidth: '500px'}}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" placeholder="Enter email">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Your information is secure and protected</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary w-50">Login</button>
          <p className="my-2">Need an account? <Link href="/register">
              <a style={{color: 'blue'}}>Register</a></Link>
          </p>
        </form>

      </div>
    )
  }
  
  export default Signin;