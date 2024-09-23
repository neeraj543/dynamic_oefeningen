import { MenuProduct } from "./MenuProduct.jsx";

export function MenuCard(props) {
    const { products } = props;

    return (
        <div>
            {products?.map(p => (<MenuProduct key={p.name} product={p} />))}
        </div>
    );
}
