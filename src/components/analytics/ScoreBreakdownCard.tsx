import React from 'react'
import {
  Box,
  VStack,
  Text,
  Progress,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  CircularProgress,
  CircularProgressLabel,
  Button,
} from '@chakra-ui/react'

interface Metrics {
    [key: string]: {
      value: number;
      max: number;
    }
  }

interface scoreBreakDownProps {
    riskscore: number
    premiumPayable: number
}

export default function ScoreBreakdownCard({ riskscore, premiumPayable } : scoreBreakDownProps) {
  // Example metrics data, which you can dynamically set
  
  const metrics: Metrics = {
    airTemperature: { value: 752, max: 1000 },
    humidity: { value: 804, max: 1000 },
    soilQuality: { value: 600, max: 1000 },
    naturalDisasterSafetyScore: { value: 896, max: 1000 }
  };

  return (
    <Box bg="#bfc6ca" p={4} borderRadius="lg" boxShadow="base" color="slate-700" w="sm">
      <VStack spacing={5}>
        <h1 className='font-bold text-2xl mt-2'>Farm Score Report</h1>
        <Divider borderColor="whiteAlpha.300" />
        <CircularProgress value={riskscore} max={1000} size="220px" thickness="12px" color="#4CB5AB">
            <CircularProgressLabel color="#4CB5AB">
                <h1 className='text-base font-semibold'>Good!</h1>
                <Text fontSize="3xl" fontWeight="bold">
                    {riskscore}
                </Text>
            </CircularProgressLabel>
        </CircularProgress>
        <div className='w-full'>
            <h1 className='w-full text-start text-lg font-bold'>Your Score is {riskscore}</h1>
            
        </div>
        {Object.keys(metrics).map((key) => (
          <Box w="full" key={key}>
            <h1 className='font-semibold'>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</h1>
            <Progress value={metrics[key].value} max={metrics[key].max} colorScheme="customGreen" size="sm" />
            <h1 className='text-[14px] font-medium'>{metrics[key].value}/{metrics[key].max}</h1>
          </Box>
        ))}
        
        <Divider borderColor="whiteAlpha.300" />
        {/* <StatGroup>
          <Stat>
            <StatLabel>Total Acres</StatLabel>
            <StatNumber>1,234</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Total Crops</StatLabel>
            <StatNumber>82</StatNumber>
          </Stat>
        </StatGroup> */}
      </VStack>
    </Box>
  );
}