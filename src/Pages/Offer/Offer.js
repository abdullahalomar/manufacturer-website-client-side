import React from 'react';
import rgbone from '../../images/offer/Gaming-RAM-PNG-File2a.png';
import rgbtwo from '../../images/offer/RGB-Ram-Transparent1a.png';

const Offer = () => {
    return (
        <div className='px-12 my-10'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow h-32 card bg-primary rounded-box place-items-center"><img src={rgbone} alt="" /></div> 
                <div class="divider lg:divider-horizontal font-bold"> OFFER</div> 
                <div class="grid flex-grow h-32 card bg-primary rounded-box place-items-center"><img src={rgbtwo} alt="" /></div>
            </div>
        </div>
    );
};

export default Offer;