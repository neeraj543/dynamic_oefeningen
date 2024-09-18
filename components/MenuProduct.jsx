export function MenuProduct(props) {
    const {productName, price} = props;
    return (
        <div>
            {`${productName} costs ${price} \u20AC!!!`}
        </div>
    );
}