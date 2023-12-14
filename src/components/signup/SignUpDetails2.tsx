"use client"
import React, { useContext, useEffect, useState } from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  FormLabel,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Select,
  VStack,
  Checkbox,
  Text,
} from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"
import Link from "next/link"
import * as Yup from "yup"
import LoginInput from "./LoginInput"
import { LoginContext } from "../../app/providers"

export default function SignUpDetails2() {
  const router = useRouter()
  const { isLoggedIn, setLoggedIn, isSigningUp, setSigningUp } = useContext(LoginContext)
  function handleSubmit() {
    setLoggedIn(true)
    router.push("/onboarding")
  }
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
            password: "",
            passwordConfirm: "",
            agreeToTerms: false,
            confirmTruthful: false
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
          agreeToTerms: Yup.boolean()
            .oneOf([true], "You must agree to the terms and conditions"),
          confirmTruthful: Yup.boolean()
            .oneOf([true], "You must confirm the details are truthful")
        })}
        onSubmit={(values, actions) => {
          console.log("test")
          handleSubmit()
          actions.resetForm()
        }}
      >
        <VStack h="80%" justify="center">
          <VStack as={Form} shadow="2xl" w="100%" bg="gray.50" p="4" className="rounded-xl">
            <Heading className="text-center">Almost There...</Heading>
            <LoginInput name="username" label="Username" />
            <LoginInput
              name="password"
              type="password"
              label="Password"
            />
            <LoginInput
              name="passwordConfirm"
              type="password"
              label="Confirm Password"
            />
            <div className="w-full">
            <Checkbox name="agreeToTerms" className="mb-3">
              <Text>
                {"I agree to the  "}
                <Link href="/terms" className="text-blue-400 hover:text-blue-700 underline">
                  Terms and Conditions
                </Link>
              </Text>
            </Checkbox>

              <Checkbox name="confirmTruthful" className="mb-3">
                I confirm that the details provided are truthful
              </Checkbox>
            </div>
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
             
              <Button w="100%" type="submit" onClick={handleSubmit}>
                Sign Up
              </Button>
            
            </ButtonGroup>

          </VStack>
        </VStack>
      </Formik>
    </Container>
  )
}
