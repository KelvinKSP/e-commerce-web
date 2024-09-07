import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ProductCard from "@/components/product-card";

export default function ProductList() {

    const data = [
        {
            name: "Produto 01",
            description: "Descrição do produto",
            price: 200
        },
        {
            name: "Produto 02",
            description: "Descrição do produto",
            price: 200
        },
        {
            name: "Produto 03",
            description: "Descrição do produto",
            price: 200
        },
        {
            name: "Produto 04",
            description: "Descrição do produto",
            price: 200
        },
        {
            name: "Produto 05",
            description: "Descrição do produto",
            price: 200
        },
    ]

    return (
        <div className="grid grid-cols-1 mt-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {data.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
}
