import React from 'react';
import Image from 'next/image';

export default function ProductCart() {
    const products = [
        {
            id: 1,
            name: 'Nome Produto',
            price: 200,
            quantity: 1,
            imageUrl: '/path-to-your-image/product-1.png',
        },
        {
            id: 2,
            name: 'Nome Produto',
            price: 200,
            quantity: 1,
            imageUrl: '/path-to-your-image/product-2.png',
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm text-gray-700">
                        <th className="px-4 py-2 border-r border-gray-300">Produto</th>
                        <th className="px-4 py-2 border-r border-gray-300">Preço</th>
                        <th className="px-4 py-2 border-r border-gray-300">Quantidade</th>
                        <th className="px-4 py-2">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="text-sm text-gray-700">
                            <td className="flex items-center px-4 py-2 border-r border-gray-300">
                                <button className='flex items-center justify-center border rounded-full border-gray-400 text-gray-400 w-5 mr-5'>
                                    X
                                </button>
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={50}
                                    height={50}
                                    className="object-cover bg-slate-400"
                                />
                                <span className="ml-2">{product.name}</span>
                            </td>
                            <td className="px-4 py-2 border-r border-gray-300 font-bold">R$ {product.price}</td>
                            <td className="px-4 py-2 border-r border-gray-300">
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    className="w-16 p-1 border border-gray-300 rounded"
                                />
                            </td>
                            <td className="px-4 py-2">R$ {product.price * product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
