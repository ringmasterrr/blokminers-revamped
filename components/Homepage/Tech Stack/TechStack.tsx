import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import {iconPaths} from './TechStackPaths';

const TechStack = () => {
  return (
    <div className='rounded-2xl border pt-16 my-14 bg-gradient-to-b from-[#FFFFFF] to-[#00283C1F] from-50%  border-[#00283C1F] flex flex-col items-center'>
      <div>
        <Heading
          heading='Our Tech Stack and Protocols'
          message='Skilled in diverse technologies for Blockchain development. Build on robust Layer 1 Blockchains as per project requirements.'
        />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 my-16 w-3/4'>
        {iconPaths.map((iconPath, index) => (
          <div
            key={index}
            className='rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-3 flex items-center justify-center gap-3'
          >
            <Image
              src={iconPath.path}
              alt={`icon-${iconPath.name}`}
              height={30}
              width={30}
              className='w-10 h-10'
            />
            <span className='font-medium text-xl'>{iconPath.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
