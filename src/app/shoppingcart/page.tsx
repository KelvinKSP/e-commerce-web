import HeaderWeb from "@/components/header-web";
import ProductCart from "@/components/product-cart";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Cupom from "@/components/cupom";
import Total from "@/components/total";
config.autoAddCss = false;

export default function ShoppingCart() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <HeaderWeb />
      </div>
      <div>
        <div className="font-bold text-2xl p-5 mt-5">Carrinho</div>
      </div>
      <div className="p-5">
        <ProductCart />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="font-bold text-2xl">Cupom Promocional</div>
          <div className="mt-5">
            <Cupom />
          </div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-2xl">Total Carrinho</div>
          <div className="mt-5">
            <Total />
          </div>
        </div>
      </div>
    </>
  );
}
