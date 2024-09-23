import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Menu Product
export function MenuProduct({ product }) {
    if (!product?.name) return null;

    return (
        <div className="my-4 mx-5"> {/* Bootstrap margin utility for vertical spacing */}
            <Row className="align-items-center justify-content-start">
                <Col xs="auto" className="text-start" style={{ minWidth: "450px" }}> {/* Fixed width with text alignment */}
                    <span>{product.name}</span>
                    <ProductSize size={product.size} />
                    <ProductNote note={product.note} />
                </Col>
                <Col xs="auto" className="text-end">
                    <span>{product.price} &euro;</span>
                </Col>
            </Row>
        </div>
    );
}

// Product Size
function ProductSize({ size }) {
    if (!size) return null;
    return (
        <span className="text-primary ms-2" style={{ fontSize: "12px" }}> {/* Bootstrap text and margin classes */}
            ({size})
        </span>
    );
}

// Product Note
function ProductNote({ note }) {
    if (!note) return null;
    return (
        <div className="text-warning fst-italic" style={{ fontSize: "14px" }}> {/* Bootstrap text color and font style */}
            {note}
        </div>
    );
}
