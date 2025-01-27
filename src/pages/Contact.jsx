function Contact() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Get in Touch</h1>
            <p className="text-center text-muted mb-5">
                We’d love to hear from you! Feel free to reach out to us with any questions.
            </p>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control border shadow-sm"
                                        id="name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control border shadow-sm"
                                        id="email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control border shadow-sm"
                                        id="message"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary shadow-sm">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact