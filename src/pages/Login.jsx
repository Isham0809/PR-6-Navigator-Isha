import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    if (!email || !password) {
      setError("All fields are required")
      return
    }

    try {
      await login(email, password)
      navigate("/home")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center text-primary mb-4">Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label m-0">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
             
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label m-0">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
             
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-outline-primary btn-lg">Login</button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <p>Don't have an account? <Link to="/register" className="text-success">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
