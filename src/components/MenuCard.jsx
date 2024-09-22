import { MenuProduct } from "./MenuProduct.jsx";

export function MenuCard(props) {
    const { products } = props;

    // Ensure products is an array and map through it
    return (
        <div>
            <h1>Menu</h1>
            {products?.map(p => (<MenuProduct key={p.name} product={p} />))}
        </div>
    );
}
