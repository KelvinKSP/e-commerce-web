import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from '@/icons/white-logo.png'

export default function HeaderWeb() {
    return (
        <div className="flex items-center justify-between shadow p-2 bg-white">
            <button>
                <Image src={logo} width={60} alt={"logo"} />
            </button>
            <div></div>
            <div className="flex gap-10 text-lg">
                <button className="hover:underline hover:font-bold underline-offset-8">Categoria 1</button>
                <button className="hover:underline hover:font-bold underline-offset-8">Categoria 2</button>
                <button className="hover:underline hover:font-bold underline-offset-8">Categoria 3</button>
            </div>
            <div className="flex items-center">
                <div className="flex text-black">
                    <button className="flex justify-center items-center w-10 h-10 relative text-white bg-black rounded-full p-1">
                        <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                        <div className="absolute -bottom-2 -left-2 bg-black text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                            1
                        </div>
                    </button>
                </div>
                <input
                    placeholder="Pesquisar produto..."
                    type="text"
                    className="ml-4 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="ml-2 px-4 py-2 border border-gray-300 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black">
                    Buscar
                </button>
            </div>
        </div>
    );
}
