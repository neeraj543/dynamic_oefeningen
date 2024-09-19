export function MenuProduct(props) {
    const { product} = props;
    product.size ??= "0";
    return (
        <div style ={{margin: "2vw", fontSize: "larger"}}>
            {`${product.name} (${product.size} cl)  ${product.price} -- \u20AC`}
        </div>
    );
}