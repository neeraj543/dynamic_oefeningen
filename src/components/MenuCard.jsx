import {MenuProduct} from "../../components/MenuProduct.jsx";
// import {PRODUCTS_DATA} from "../data/data.js";

export function MenuCard(props){
   const {products} = props;
   return (
       <div>
            <h1>Menu </h1>
           {products.map(p => <MenuProduct key={p.name} product={p}/>)}
       </div>);
}