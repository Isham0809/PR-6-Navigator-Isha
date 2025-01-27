import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/AboutPage';
import Contact from './pages/Contact';
import Home from './pages/HomePage';
import Products from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import { ProductProvider } from './context/ProductContext';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
function App() {
  return (
    <>
      <ProductProvider>
        <AuthProvider>
          <BrowserRouter>
            <div>
              <Navbar />
              <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="col-xl-6">
                  <Routes>

                    <Route path="/" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

          
                    <Route path='/home' element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    } />
                    <Route path='/about' element={
                      <ProtectedRoute>
                        <About />
                      </ProtectedRoute>
                    } />
                    <Route path='/contact' element={
                      <ProtectedRoute>
                        <Contact />
                      </ProtectedRoute>
                    } />
                    <Route path="/products" element={
                      <ProtectedRoute>
                        <Products />
                      </ProtectedRoute>
                    }>
                      <Route path=":productId" element={
                        <ProtectedRoute>
                          <ProductDetails />
                        </ProtectedRoute>
                      } />
                    </Route>

                    <Route path='*' element={
                      <div>
                        <h1>404 PAGE NOT FOUND</h1>
                        <p>The Page You're Looking For Does Not Exist</p>
                      </div>
                    } />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </AuthProvider>
      </ProductProvider>
    </>
  );
}

export default App;
