import React from "react";
import { useProducts } from "../context/ProductContext";

function Dashboard() {
  const products = useProducts();

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-primary">Dashboard</h1>

      {/* Statistics Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card text-center shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <p className="display-6 text-primary">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">Categories</h5>
              <p className="display-6 text-success">4</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">Recent Orders</h5>
              <p className="display-6 text-danger">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="row g-4">

        {/* Product List Section */}
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h5>Products</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                {products.map((product) => (
                  <li key={product.id} className="mb-3">
                    <strong>{product.name}</strong> - ${product.price} <br />
                    <span className="text-muted">Category: {product.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
