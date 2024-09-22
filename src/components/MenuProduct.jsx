// Menu Product
export function MenuProduct(props) {
    const {product} = props;

    if (!product?.name) return null;

    // Styles
    const containerStyle = {margin: "2vw", fontSize: "larger", display: "flex"};
    const nameStyle = {flex: 1};
    const priceStyle = {flex: 1};

    // Main codes

    const productPrice = <div style={priceStyle}>{product.price} &euro;</div>;

    return (
        <div style={containerStyle}>
            <div style={nameStyle}>
                <span>{product.name}</span>
                <ProductSize S={product}/>
                <ProductNote N={product}/>
            </div>
            {productPrice}
        </div>
    );
}

// Product Size
function ProductSize(props) {
    const {S} = props;
    if (!S.size) return null;
    return (
        <span style={{color: "blue", display: "inline", fontSize: "12px"}}>
            ({S.size})
        </span>
    );
}

// Product Note
function ProductNote(props) {
    const {N} = props;
    if (!N.note) return null;

    return (
        <div style={{color: "red", fontSize: 14, fontStyle: "italic"}}>
            {N.note}
        </div>
    )
}