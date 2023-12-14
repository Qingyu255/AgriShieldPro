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

export default function SignUp() {
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
            <Heading>Sign Up</Heading>
            <LoginInput name="email" label="Email" />
            <LoginInput name="username" label="Your Name" />
            <h1 className="text-left font-bold w-full">Farm Region</h1>
            <Select placeholder="Select region" name="region">
              {southeastAsianCountries.map((country, index) => (
                <option key={index} value={country.toLowerCase().replace(/\s/g, '-')}>{country}</option>
              ))}
            </Select>
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
              <Link href="/signupdetails" className="w-full">
                <Button w="100%" type="submit">
                  Next
                </Button>
              </Link>

            </ButtonGroup>
            <Link href="/login" className="w-full">
              <Button
                  variant="outline"
                  w="100%"
              >
                  <h1 className="font-medium text-sm text-slate-500">
                      Already have an account? Login Here
                  </h1>
                  
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Formik>
    </Container>
  )
}
