export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name  )return ;


    // styles
    const containerStyle = { margin: "2vw", fontSize: "larger", display: "flex" };
    const nameStyle = { flex: 1 };
    const priceStyle = { flex: 1 };

    //Product parts
    const productNameAndSize = (
        <>
            {product.name}
            {product.size && <span style={{ color: "blue", display: "inline" }}> ({product.size} cl)</span>}
        </>
    );
    const productNote = product.note && <div style={{ color: "blue", fontSize: 14 }}>{product.note}</div>;
    const productPrice = <div style={priceStyle}>{product.price} &euro;</div>;


    return (
        <div style={containerStyle}>
            <div style={nameStyle}>
                {productNameAndSize}
                {productNote}
            </div>
            {productPrice}
        </div>
    );

}
// product.size ??= "";
