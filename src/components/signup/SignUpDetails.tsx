"use client"
import { ArrowBackIcon } from "@chakra-ui/icons"
import {
FormLabel,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Select,
  VStack,
} from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"
import Link from "next/link"
import * as Yup from "yup"
import LoginInput from "./LoginInput"

export default function SignUpDetails() {
  const router = useRouter()
  var southeastAsianCountries = [
    "Brunei",
    "Cambodia",
    "East Timor (Timor-Leste)",
    "Indonesia",
    "Laos",
    "Malaysia",
    "Myanmar (Burma)",
    "Philippines",
    "Singapore",
    "Thailand",
    "Vietnam"
  ]

  return (
    <Container h="100vh">
      <Formik
        initialValues={{
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            region: "",
            farmingType: "",
            farmSize: "",
            phoneNumber: "",
            experienceYears: "",
            specialSkills: "",
            servicesNeeded: "",
            challengesFaced: ""
          }}
          
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Username is required")
            .max(200, "Username too long"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password too short")
            .max(200, "Password too long"),
          passwordConfirm: Yup.string()
            .required("Password Confirmation is required")
            .min(6, "Password too short")
            .max(200, "Password too long"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email")
            .max(200, "Email too long"),
          region: Yup.string()
            .required("Region is required")
            .email("Invalid region")
            .max(200, "region too long"),
        })}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.resetForm()
        }}
      >
        <VStack h="80%" justify="center">
          <VStack as={Form} shadow="2xl" w="100%" bg="gray.50" p="4" className="rounded-xl">
            <Heading className="text-center">Let Us Get To Know You Better</Heading>

            {/* <h1 className="text-left font-bold w-full">Farm Location</h1>
            <Select placeholder="Select region" name="region">
              {southeastAsianCountries.map((country, index) => (
                <option key={index} value={country.toLowerCase().replace(/\s/g, '-')}>{country}</option>
              ))}
            </Select> */}

            <h1 className="text-left font-bold w-full">Farming Type</h1>
            <Select
                placeholder="Select Farming Type"
                name="farmingType"
            >
                <option value="crop">Crop Farming</option>
                <option value="livestock">Livestock Farming</option>
                <option value="poultry">Poultry Farming</option>
                <option value="aquaculture">Aquaculture</option>
                {/* Add more farming types as needed */}
            </Select>

            <LoginInput
                name="farmSize"
                type="number"
                label="Farm Size (in acres)"
                placeholder="acres"
            />
            <LoginInput
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
            />

            <LoginInput
                name="experienceYears"
                type="number"
                label="Years of Farming Experience"
                placeholder="Enter number of years"
            />

            <LoginInput
                name="specialSkills"
                label="Special Skills or Training"
                placeholder="Describe any special skills or training"
            />

            <LoginInput
                name="challengesFaced"
                label="Specific Challenges Faced"
                placeholder="Describe specific challenges"
            />


            {/* <LoginInput
              name="password"
              type="password"
              label="Password"
            />
            <LoginInput
              name="passwordConfirm"
              type="password"
              label="Confirm Password"
            /> */}
            <ButtonGroup
              colorScheme="customOrange"
              w="100%"
              size="lg"
              pt="4"
            >
              <Button
                variant="outline"
                w="100%"
                onClick={() => router.back()}
                leftIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              
              <Link href="/signupdetails2" className="w-full">
                <Button w="100%" type="submit">
                  Next
                </Button>
              </Link>
            </ButtonGroup>

          </VStack>
        </VStack>
      </Formik>
    </Container>
  )
}
