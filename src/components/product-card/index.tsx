import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface Props {
    name: string,
    description: string,
    price: number
}

export default function ProductCard({ name, description, price }: Props) {

    return (
        <div className="w-[450px] h-[300px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-full flex">
                <div className="w-1/2 h-full">
                    <Image
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                        src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                        alt="Nome do Produto"
                    />
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {description}
                        </p>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-800">R$ {price}</span>
                        <button className="w-14 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white focus:outline-none">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
