import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    return (
        <footer dir="rtl">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; Tehila Jewelry
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
