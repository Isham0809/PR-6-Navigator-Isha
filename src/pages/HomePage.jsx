import { Link } from "react-router-dom";

function Home() {
    return (
        <>

            <div className="row g-5 align-items-center my-5">
                {/* Text Section */}
                <div className="col-xl-7 col-lg-6 col-md-12 text-center text-md-start">
                    <h1 className="display-4 fw-bold text-primary">Welcome to Our Store!</h1>
                    <p className="lead text-muted mt-3">
                        Discover a wide range of products at unbeatable prices. From electronics to fashion, we have something for everyone.
                        Whether you're upgrading your gadgets, revamping your wardrobe, or redecorating your home, you'll find the perfect items in our store.
                        We offer high-quality products sourced from trusted brands, ensuring reliability and satisfaction.
                        Plus, enjoy fast shipping and exceptional customer service with every order. Shop with us today and experience the best online shopping experience!
                    </p>
                    <div className="mt-4">
                        <Link to="/products" className="btn btn-primary btn-lg me-3">Explore Products</Link>  
                        
                        <Link to="/about" className="btn btn-outline-primary btn-lg">Learn More</Link>  
                    </div>
                </div>
                {/* Image Section */}
                <div className="col-xl-5 col-lg-6 text-center">
                    <img
                        src="https://www.freepnglogos.com/uploads/logo-home-png/house-logo-design-vector-real-estate-logo-photos-25.png"
                        alt="Store Display"
                        className="img-fluid"
                    />
                </div>
            </div>
        </>
    )
}

export default Home;