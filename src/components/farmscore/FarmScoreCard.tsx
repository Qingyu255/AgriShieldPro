import React from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

export default function FarmScoreCard() {
  const score = 763; // Example score, this could be a prop or state
  const maxScore = 1000; // Maximum possible score

  return (
    <VStack spacing={4} p={4} borderRadius="xl" boxShadow="xl" bg="white" color="black">
        <h1 className='text-xl font-bold'>FARM SCORE</h1>
      <CircularProgress value={score} max={maxScore} size="220px" thickness="12px" color="#4CB5AB">
        <CircularProgressLabel color="#4CB5AB">
            <h1 className='text-base font-semibold'>Good!</h1>
          <Text fontSize="3xl" fontWeight="bold">
            {score}
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
      <h1 className='text-slate-600'>
        Score updates monthly
      </h1>
      {/* <Button colorScheme="green" variant="solid">
        Save on your farm insurance
      </Button>
      <Text fontSize="sm">
        Get a quote with your FarmScore
      </Text>
      <Box flexDirection="row" justifyContent="space-between" width="100%">
        <Text fontSize="md">Recent Activities</Text>
        <Button variant="ghost" colorScheme="green">
          View all
        </Button>
      </Box> */}
    </VStack>
  );
}
