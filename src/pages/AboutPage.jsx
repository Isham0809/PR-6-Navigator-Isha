import { Link } from "react-router-dom";

function About() {
    return (
        <div className="container">
            <h1 className="text-center display-4 mb-4 text-primary">About Our Store</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <p className="text-dark">
                        At MyStore, our mission is simple: provide exceptional quality and customer service at the best prices.
                        We carefully select products to ensure that our customers get the best value for their money.
                        With a wide variety of categories, we are committed to being your go-to online store for everything you need.
                    </p>
                    <p className="text-dark">
                        Our values revolve around trust, quality, and convenience. We focus on building relationships with our customers
                        and constantly strive to meet your needs.
                    </p>
                    <Link to="/products" className="btn btn-primary btn-lg me-3">Explore Products</Link>
                </div>
                <div className="col-md-6">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/019/985/450/small_2x/3d-minimal-debating-icon-concept-problem-solving-concept-question-mark-text-box-with-a-chat-box-and-pencil-3d-illustration-free-png.png" className="img-fluid" alt="store image" />
                </div>
            </div>

            <div className="my-5">
                <h2 className="text-center text-primary">What Our Customers Are Saying</h2>
                <div id="carouselTestimonials" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-block w-100 text-center text-muted">
                                <p>"I love shopping at MyStore. Their customer service is amazing, and their products are always top-notch!"</p>
                                <p><strong>- Jane Doe</strong></p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-block w-100 text-center text-muted">
                                <p>"Fast shipping and high-quality products! I'm a loyal customer now."</p>
                                <p><strong>- John Smith</strong></p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-block w-100 text-center text-muted">
                                <p>"Best online shopping experience. Will definitely recommend to my friends!"</p>
                                <p><strong>- Sarah Lee</strong></p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default About;
