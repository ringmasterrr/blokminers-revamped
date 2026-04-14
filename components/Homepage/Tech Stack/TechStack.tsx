import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import { iconPaths } from './TechStackPaths'

// AI & Automation tools data pointing to local SVGs
const aiToolPaths = [
  { name: 'TensorFlow', path: '/TechStack/AI/TensorFlow.svg' },
  { name: 'PyTorch', path: '/TechStack/AI/PyTorch.svg' },
  { name: 'OpenAI', path: '/TechStack/AI/OpenAI.svg' },
  { name: 'Hugging Face', path: '/TechStack/AI/HuggingFace.svg' },
  { name: 'LangChain', path: '/TechStack/AI/LangChain.svg' },
  { name: 'Apache Spark', path: '/TechStack/AI/ApacheSpark.svg' },
  { name: 'Kubernetes', path: '/TechStack/AI/Kubernetes.svg' },
  { name: 'Docker', path: '/TechStack/AI/Docker.svg' },
  { name: 'Ansible', path: '/TechStack/AI/Ansible.svg' },
  { name: 'Terraform', path: '/TechStack/AI/Terraform.svg' },
  { name: 'Jenkins', path: '/TechStack/AI/Jenkins.svg' },
  { name: 'GitHub Actions', path: '/TechStack/AI/GitHubActions.svg' },
  { name: 'Prometheus', path: '/TechStack/AI/Prometheus.svg' },
  { name: 'Grafana', path: '/TechStack/AI/Grafana.svg' },
  { name: 'MLflow', path: '/TechStack/AI/MLflow.svg' },
  { name: 'Jupyter', path: '/TechStack/AI/Jupyter.svg' },
  { name: 'Apache Airflow', path: '/TechStack/AI/ApacheAirflow.svg' },
  { name: 'Pandas', path: '/TechStack/AI/Pandas.svg' },
  { name: 'NumPy', path: '/TechStack/AI/NumPy.svg' },
  { name: 'Scikit-learn', path: '/TechStack/AI/ScikitLearn.svg' },
  { name: 'ONNX', path: '/TechStack/AI/ONNX.svg' },
  { name: 'Ray', path: '/TechStack/AI/Ray.svg' },
  { name: 'Kafka', path: '/TechStack/AI/Kafka.svg' },
]

const TechStack = () => {
  const halfIndex = Math.ceil(iconPaths.length / 2)
  const firstHalf = iconPaths.slice(0, halfIndex)
  const secondHalf = iconPaths.slice(halfIndex)

  const aiHalfIndex = Math.ceil(aiToolPaths.length / 2)
  const aiFirstHalf = aiToolPaths.slice(0, aiHalfIndex)
  const aiSecondHalf = aiToolPaths.slice(aiHalfIndex)

  return (
    <div className='masked-element z-[100] my-10 flex flex-col items-center overflow-hidden rounded-2xl border border-[#00283C1F] bg-gradient-to-b from-[#FFFFFF] from-50% to-[#00283C1F] py-12 sm:my-14 sm:py-16'>
      {/* Blockchain Heading */}
      <div>
        <Heading
          heading='Blockchain & Web3 Ecosystem'
          message='Skilled in diverse technologies for Blockchain development. Build on robust Layer 1 Blockchains as per project requirements.'
        />
      </div>

      {/* Blockchain Top Row */}
      <div className='mt-10 flex overflow-hidden sm:mt-16'>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {firstHalf.map((iconPath, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='text-sm font-medium sm:text-xl'>
                {iconPath.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {firstHalf.map((iconPath, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='text-sm font-medium sm:text-xl'>
                {iconPath.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {firstHalf.map((iconPath, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='text-sm font-medium sm:text-xl'>
                {iconPath.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Blockchain Bottom Row */}
      <div className='flex overflow-hidden'>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {secondHalf.map((iconPath, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='text-sm font-medium sm:text-xl'>
                {iconPath.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {secondHalf.map((iconPath, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='text-sm font-medium sm:text-xl'>
                {iconPath.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {secondHalf.map((iconPath, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='text-sm font-medium sm:text-xl'>
                {iconPath.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI & Automation Heading */}
      <div className='mt-16'>
        <Heading
          heading='AI & Automation Ecosystem'
          message='Leveraging cutting‑edge AI frameworks, MLOps, and automation tools to build intelligent, scalable solutions.'
        />
      </div>

      {/* AI Tools Top Row */}
      <div className='mt-10 flex overflow-hidden sm:mt-16'>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {aiFirstHalf.map((tool, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={tool.path}
                alt={`icon-${tool.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='whitespace-nowrap text-sm font-medium sm:text-xl'>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {aiFirstHalf.map((tool, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={tool.path}
                alt={`icon-${tool.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='whitespace-nowrap text-sm font-medium sm:text-xl'>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {aiFirstHalf.map((tool, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={tool.path}
                alt={`icon-${tool.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='whitespace-nowrap text-sm font-medium sm:text-xl'>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools Bottom Row */}
      <div className='flex overflow-hidden'>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {aiSecondHalf.map((tool, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={tool.path}
                alt={`icon-${tool.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='whitespace-nowrap text-sm font-medium sm:text-xl'>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {aiSecondHalf.map((tool, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={tool.path}
                alt={`icon-${tool.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='whitespace-nowrap text-sm font-medium sm:text-xl'>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {aiSecondHalf.map((tool, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-2 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-4 py-2 sm:gap-3 sm:px-8 sm:py-3'
            >
              <Image
                src={tool.path}
                alt={`icon-${tool.name}`}
                height={30}
                width={30}
                className='h-7 w-7 sm:h-10 sm:w-10'
              />
              <span className='whitespace-nowrap text-sm font-medium sm:text-xl'>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
