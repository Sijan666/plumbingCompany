import React from 'react'
import Image from './Image'

const ProjectCommon = ({className , projectImg , projectType , projectName}) => {
    return (
        <>
        <div className={`${className} font-roboto`}>
            <Image imgSrc={projectImg} className={'w-full mx-auto'}/>
            <div className="mt-2 text-center">
                <h4 className='text-base font-medium text-[#DD3142]'>{projectType}</h4>
                <h4 className='text-sm font-medium text-[#222222] pt-3'>{projectName}</h4>
            </div>
        </div>
        </>
    )
}

export default ProjectCommon