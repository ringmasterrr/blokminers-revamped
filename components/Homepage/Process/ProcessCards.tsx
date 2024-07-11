import Image from 'next/image'
import React from 'react'

const content = [
  {
    title: 'Plan',
    description:
      'We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.',
    image: '/OurProcess/plan.svg',
  },
  {
    title: 'Architect',
    description:
      'This is the skeletal framework of the project and at this point, we decide the Blockchain protocol based on type, energy efficiency, bridging strength and cost. We’ll also develop frameworks and determine smart contracts, business logic and storage.',
    image: '/OurProcess/architect.svg',
  },
  {
    title: 'Design',
    description:
      'We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.',
    image: '/OurProcess/design.svg',
  },

  {
    title: 'Build',
    description:
      'This is the skeletal framework of the project and at this point, we decide the Blockchain protocol based on type, energy efficiency, bridging strength and cost. We’ll also develop frameworks and determine smart contracts, business logic and storage.',
    image: '/OurProcess/build.svg',
  },
  {
    title: 'Test',
    description:
      'We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.',
    image: '/OurProcess/test.svg',
  },
  {
    title: 'Launch',
    description:
      'We’re present through every stage in the journey even after we’ve delivered your decentralised application. Safely deploy your products at this stage, you’ll typically gain traction all things being equal and also get more feedback to further solidify the app.',
    image: '/OurProcess/launch.svg',
  },
  {
    title: 'Upgrade',
    description:
      'There’s no perfect idea or software. You can only pay excellent attention to the most unnecessary details like we do. Regular updates and reviews keep your software alive as the world evolves. You can always count on our expert Blockchain tech team to readily deliver these solid upgrades.',
    image: '/OurProcess/upgrade.svg',
  },
]

export const ProcessCards = () => {
  return (
    <>
      {content.map((item, index) => (
        <div key={index} className='flex items-center justify-center gap-8'>
          {index % 2 === 0 ? (
            <>
              <div className='glassy-bg flex h-[336px] w-[550px] translate-x-20 flex-col items-start justify-center space-y-4 rounded-2xl p-8 backdrop-blur-lg'>
                <div className='text-3xl font-bold'>{item.title}</div>
                <div>{item.description}</div>
              </div>
              <div className='glassy-bg py-18 flex h-[383px] w-[580px] items-center justify-center rounded-2xl p-8'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>
            </>
          ) : (
            <>
              <div className='glassy-bg py-18 flex h-[383px] w-[580px] translate-x-20 items-center justify-center rounded-2xl p-8'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>
              <div className='glassy-bg flex h-[336px] w-[550px] flex-col items-start justify-center space-y-4 rounded-2xl p-8 backdrop-blur-lg'>
                <div className='text-3xl font-bold'>{item.title}</div>
                <div>{item.description}</div>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  )
}
