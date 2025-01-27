import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const products = useProducts();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="alert alert-warning text-center">
    Product not Found
  </div>
  }

  return (
    <div className="container py-5">
      {/* Product Card */}
      <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "600px" }}>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top rounded-top-3"
          style={{ height: "300px", objectFit: "cover" }}
        />
        
        <div className="card-body">
          {/* Product Name */}
          <h4 className="card-title text-primary">{product.name}</h4>
          
          {/* Product Price and Category */}
          <div className="d-flex justify-content-between mb-3">
            <p className="text-muted"><strong>Category:</strong> {product.category}</p>
            <p className="text-success"><strong>Price:</strong> ${product.price}</p>
          </div>
          
          {/* Product Description */}
          <p className="card-text mb-3">{product.description || "No description available."}</p>
          
          {/* Back Button */}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>

            <button className="btn btn-outline-success btn-lg">
              
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
