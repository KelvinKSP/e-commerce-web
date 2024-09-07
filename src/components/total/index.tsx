import React from 'react';

export default function Total() {

    return (
        <div className='border border-gray-300 w-[330px]'>
            <div className='flex justify-between items-center h-16 p-4 boder border-b border-gray-300'>
                <div className='font-bold'>Subtotal</div>
                <div>R$ 200</div>
            </div>
            <div className='flex h-16 justify-between items-center p-4'>
                <div className='font-bold'>Total</div>
                <div>R$ 200</div>
            </div>
        </div>
    );
}
