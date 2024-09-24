import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Menu Product
export function MenuProduct(props) {
    const {product, isFavourite} = props;
    if (!product?.name || product.price === undefined) return null;

    return (
        <div className="my-4 mx-5">
            <Row className="align-items-center justify-content-start">
                <Col xs="auto" className="text-start" style={{ minWidth: "450px" }}>
                    <span style={{color: isFavourite ? 'indianred' : null, fontWeight: isFavourite ? "bold" : null}}>{product.name}</span>
                    <ProductSize size={product.size}/>
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
        <span className="text-primary ms-2" style={{ fontSize: "12px" }}>
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
