export function MenuProduct(props) {
    const { product:yolo } = props;
    return (
        <div>
            {`${yolo.name} costs ${yolo.price} \u20AC!!!`}
        </div>
    );
}