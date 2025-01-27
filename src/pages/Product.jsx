import { Link, Outlet } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function Products() {
  const products = useProducts();

  return (
    
      <div className="row">
        {/* Product List Section */}
        <div className="col-md-6">
          <h2 className="text-center text-primary">Product List</h2>
          <div className="list-group">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="list-group-item list-group-item-action mb-4 shadow-sm p-4"
              >
                <h5 className="mb-1">{product.name}</h5>
              </Link>
            ))}
          </div>
        </div>

        {/* Product Details Section (Using Outlet for Nested Routing) */}
        <div className="col-md-6">
          <Outlet />
        </div>
      </div>
  
  );
}

export default Products;
