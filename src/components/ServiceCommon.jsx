import React from 'react'
import Image from './Image'

const ServiceCommon = ({className , serviceImg ,serviceName , serviceDesc}) => {
    return (
        <>
        <div className={`${className} shadow-newMade pt-[42px] pr-[15px] pl-[18px] pb-[22px] rounded-[5px] overflow-hidden font-roboto`}>
            <Image imgSrc={serviceImg} className={'mx-auto'}/>
            <div className="mt-[25px] text-center">
                <h4 className='text-black font-medium text-sm'>{serviceName}</h4>
                <p className='text-[#6D6D6D] leading-[133.5%] text-[12px] pt-[18px]'>{serviceDesc}</p>
            </div>
        </div>
        </>
    )
}

export default ServiceCommon