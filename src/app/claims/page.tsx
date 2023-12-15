"use client"
import React from 'react'
import { SimpleGrid, Box, VStack, Text, Button, useColorModeValue, Icon } from '@chakra-ui/react'
import { FaClipboardList, FaHistory, FaRegFileAlt, FaSearchDollar } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { Progress } from '@chakra-ui/react'

interface ClaimCardProps {
    title: string;
    description: string;
    icon: IconType;
    progress?: number;
  }

// function ClaimCard({ title, description, icon } : ClaimCardProps) {

//   return (
//     <Box p={5} borderRadius="lg" _hover={{ boxShadow: 'md' }} cursor="pointer" className='border-2 border-[#4CB5AB]'>
//       <VStack spacing={3}>
//         <Icon as={icon} w={10} h={10} color="#4CB5AB" />
//         <Text fontSize="lg" fontWeight="bold">{title}</Text>
//         <Text textAlign="center">{description}</Text>
//       </VStack>
//     </Box>
//   );
// }
function ClaimCard({ title, description, icon, progress }: ClaimCardProps) {
    return (
      <Box p={5} borderRadius="lg" _hover={{ boxShadow: 'md' }} cursor="pointer" className='border-2 border-[#4CB5AB]'>
        <VStack spacing={3}>
          <Icon as={icon} w={10} h={10} color="#4CB5AB" />
          <Text fontSize="lg" fontWeight="bold" className='text-center'>{title}</Text>
          <Text textAlign="center">{description}</Text>
          {progress !== undefined && (
            <Progress value={progress} size="sm" colorScheme="green" width="full" />
          )}
        </VStack>
      </Box>
    );
  }

export default function Page() {


  return (
    <VStack spacing={8} p={8}>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="full">
        <div>

        
        <h1 className="font-semibold text-xl pb-2">Recents</h1>
        <ClaimCard
            title="One Natural Disaster Claim In Processing"
            description="Your claim is awaiting approval"
            icon={FaClipboardList}
            progress={70}
        />
        </div>
        <div>
        <h1 className="font-semibold text-xl pb-2">Other Claim Actions</h1>
        <ClaimCard
          title="Submit Claim"
          description="File a new claim for your policy."
          icon={FaRegFileAlt}
        />
        </div>
        <ClaimCard
          title="Claim Status"
          description="Check the status of a current claim."
          icon={FaClipboardList}
        />
        <ClaimCard
          title="Dispute Claim"
          description="Raise a dispute on claim decisions."
          icon={FaSearchDollar}
        />
        <ClaimCard
          title="View Past Claims"
          description="Review your claim history."
          icon={FaHistory}
        />
      </SimpleGrid>
    </VStack>
  );
}
