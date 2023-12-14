import React from 'react';
import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function SensorCard() {

  return (
    <Box bg="#4CB5AB" p={5} borderRadius="lg" boxShadow="md" textAlign="center">
      <VStack spacing={4}>
        <Image
        src="/soilSensor.png"
        alt="happyFruits"
        width={65}
        height={60}
        />
        <Text fontSize="xl" fontWeight="bold" color="green.800">
          Get Your AgrishieldPro Sensor For Free
        </Text>
        <Text color="gray.600">
            Our sensor helps you monitor your farm&#39;s health and optimise for the best insurance rates.
   
        </Text>
        <Link href="/onboarding/requestiotdevice">
        <Button  size="md" variant="solid" bg="white">
          Receive Your Sensor
        </Button>
        </Link>
      </VStack>
    </Box>
  );
}
