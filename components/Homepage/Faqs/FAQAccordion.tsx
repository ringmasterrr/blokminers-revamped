import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQAccordion = () => {
  return (
    <Accordion type='single' collapsible className='space-y-3'>
      <AccordionItem
        value='item-1'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          What is Blockchain technology?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-2'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          What services do we offer in blockchain development?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-3'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          How do you ensure the security of blockchain applications?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-4'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          What industries can benefit from blockchain development services?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-5'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          What are some popular use cases for blockchain development?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-6'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          How does blockchain technology impact industries like finance and
          supply chain?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-7'
        className='rounded-lg border px-4 py-3 shadow'
      >
        <AccordionTrigger className='text-start'>
          What is a smart contract and how can it benefit my business?
        </AccordionTrigger>
        <AccordionContent>
          Blockchain is a decentralized and distributed ledger technology that
          securely records transactions across a network of computers. It uses
          cryptographic techniques to ensure the integrity and immutability of
          data, making it resistant to tampering.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FAQAccordion
