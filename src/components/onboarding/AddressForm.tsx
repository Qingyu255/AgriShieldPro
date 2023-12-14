"use client"
import React from 'react';
import { FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';
import { useRouter } from "next/navigation"

export default function AddressForm() {
  const router = useRouter()
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Process form submission 
    router.push("/onboarding/setup")
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <h1 className='text-center font-bold text-[27px]'>Where Shall We Deliver The Sensor To?</h1>
        <FormControl id="home-address">
          <FormLabel>Home Address</FormLabel>
          <Input type="text" placeholder="Enter your home address" />
        </FormControl>
        <FormControl id="city">
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="Enter your city" />
        </FormControl>
        <FormControl id="state">
          <FormLabel>State/Province/Region</FormLabel>
          <Input type="text" placeholder="Enter your state or region" />
        </FormControl>
        <FormControl id="zip-code">
          <FormLabel>Zip Code</FormLabel>
          <Input type="text" placeholder="Enter your zip code" />
        </FormControl>
        <FormControl id="country">
          <FormLabel>Country</FormLabel>
          <Input type="text" placeholder="Enter your country" />
        </FormControl>
        <Button colorScheme="customGreen" type="submit">Submit</Button>
      </VStack>
    </form>
  );
}
