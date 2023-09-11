import { Alert, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Newsletter = ({ subscribe, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const onValidated = (data) => {
        // Assuming you have an 'onValidated' function implementation
        console.log("Email validated:", data);
        // You can call the subscribe function here or handle it as needed
        subscribe(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf("@") > -1) {
            // Call the onValidated function to handle submission
            onValidated({
                EMAIL: email
            });
        }
    };

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}
