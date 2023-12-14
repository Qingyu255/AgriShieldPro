import React from 'react'
import {
  Box,
  Text,
  VStack,
  Button,
  useColorModeValue,
  Icon,
  Heading,
} from '@chakra-ui/react'
import { BsStar } from 'react-icons/bs'
import Link from 'next/link'

export default function PerformanceCard() {
  const score = 763; // Your dynamic score value

  return (
    <Link href="/analytics">
        <VStack
        spacing={4}
        p={4}
        bg="#ffffff"
        borderRadius="lg"
        border="solid"
        borderColor="#4CB5AB"
        width="100%"
        maxW="md"
        textAlign="center"
    
        >
        
        <VStack spacing={1}>
            <Heading size="md" className='flex justify-center items-center'>View Performance Report</Heading>
            <Text fontSize="sm" className='text-slate-600'>Your score is {score}</Text>
        </VStack>

        </VStack>
    </Link>
  );
}