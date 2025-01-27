import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password || !confirmPassword) {
      setError("All fields are ")
      return
    }

    if (password !== confirmPassword) {
      setError("Password does not match")
      return
    }

    try {
      await register(email, password)
      navigate("/login")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="text-center text-primary mb-4">Create Account</h2>

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

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label m-0">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-outline-primary btn-lg">Register</button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <p>Already have an account? <a href="/login" className="text-success">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register
