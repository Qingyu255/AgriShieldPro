import React from 'react';
import {
  Box,
  Text,
  VStack,
  Button,
  useColorModeValue,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { BsStar } from 'react-icons/bs';

export default function InfoCard() {
  const score = 750; // Your dynamic score value

  return (
    <div className='md:flex justify-center items-center'>
        <VStack
        spacing={4}
        p={4}
        bg="#bfc6ca"
        borderRadius="lg"
        boxShadow="base"
        
        width="100%"
        maxW="md"
        textAlign="center"
        >
        
        <VStack spacing={1}>
            <div className='flex flex-row'>
                <div className='pt-1 pr-2'>
                    <BsStar/>
                </div>
                
                <Heading size="md" className='flex justify-center items-center'>Low Soil Moisture Detected</Heading>
            </div>
            <Text fontSize="sm" className='text-slate-600'>Weathers hot! Your soil can use some water!</Text>
        </VStack>
        </VStack>
    </div>
  );
}