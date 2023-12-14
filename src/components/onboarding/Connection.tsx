"use client"
import React, { useState } from 'react'
import {
  Box,
  VStack,
  Text,
  Button,
  Image,
  useColorModeValue,
  Stack,
  Icon,
  Spinner,
  useToast,
  Center
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FaBluetooth, FaPowerOff, FaMobileAlt, FaLink } from 'react-icons/fa'


const Connection = () => {
    const [isConnecting, setIsConnecting] = useState(false)
    const toast = useToast()
    const router = useRouter()
    const handleConnect = () => {
        // Implement the logic to handle the Bluetooth connection
        console.log('Attempting to connect...')
        setIsConnecting(true)
        setTimeout(() => {
            // Show a success toast after connection
            setIsConnecting(false)
            toast({
              title: 'Connected',
              description: 'Your AgriShieldPro Soil Sensor has been successfully connected.',
              status: 'success',
              duration: 2000, // Show the toast for 1 second
              isClosable: true,
            })
          }, 2000)
        router.push("/home")
      }
      
    
      return (
        <VStack spacing={5} p={5} align="stretch" className='border-2 rounded-xl border-[#4CB5AB] mx-4 pt-10 mt-10 font-medium'>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              Device Setup
            </Text>
            <Text mt={2} fontSize="xl" fontWeight="semibold">
              Upon Receiving The Sensor, Follow these steps to connect your AgriShieldPro Sensor:
            </Text>
          </Box>
    
          <Stack spacing={4}>
            <VStack>
              <Icon as={FaMobileAlt} boxSize={8} />
              <Text>Bring your IoT device close to your phone.</Text>
            </VStack>
    
            <VStack>
              <Icon as={FaBluetooth} boxSize={8} color="blue.300"/>
              <Text >Turn on Bluetooth on your phone.</Text>
            </VStack>
    
            <VStack>
              <Icon as={FaPowerOff} boxSize={8} color="red.500"/>
              <Text>Turn on the IoT sensor device.</Text>
            </VStack>
          </Stack>
    
          <Button leftIcon={<FaLink />} colorScheme="customGreen" onClick={handleConnect} mt={10}>
            Connect
          </Button>
          {isConnecting && (
                <Center>
                <Spinner size="xl" />
                </Center>
            )}
        </VStack>
      )
    }

 export default Connection