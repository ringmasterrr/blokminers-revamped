import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import TechStackPaths from './TechStackPaths';

const TechStack = () => {
    const iconPaths = TechStackPaths();
  return (
    <div className='rounded-2xl border py-4'>
      <div>
        <Heading
          heading='Our Tech Stack and Protocols'
          message='Skilled in diverse technologies for Blockchain development. Build on robust Layer 1 Blockchains as per project requirements.'
        />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-3'>
        {iconPaths.map((iconPath, index) => (
          <div
            key={index}
            className='round rounded-2xl border border-[#00283C3D] bg-[#00283C14] h-8 w-10 flex items-center justify-center gap-3'
          >
            <Image
              src={iconPath}
              alt={`icon-${index + 1}`}
              height={30}
              width={30}
              className='w-6 h-6'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
