import React from "react";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Link, useRouter } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { AlertCircleIcon } from "@/components/ui/icon";

const SignUp = () => {
  const router = useRouter();
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [passwdVal, setpasswdVal] = React.useState("");
  const [emailVal, setemailVal] = React.useState("");
  const [confirmPass, setconfirmPass] = React.useState("");

  const handleSubmit = () => {
    if (passwdVal.length < 6 || confirmPass !== passwdVal) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <Center className="flex-1  py-safe h-screen">
      <VStack space="4xl" className="w-full p-4 ">
        <Card size="md" variant="outline">
          <Heading size="lg" className="mb-1 capitalize">
            welcome !
          </Heading>
          <Text size="sm">Please fill the form to create an account.</Text>
        </Card>
        <Box className="  w-full  ">
          <VStack space="4xl">
            <FormControl size="md" isRequired>
              <FormControlLabel>
                <FormControlLabelText>Email</FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1 border border-secondary-700" size="md">
                <InputField
                  type="text"
                  placeholder="example@gmail.com"
                  value={emailVal}
                  onChangeText={(text) => setemailVal(text)}
                />
              </Input>
            </FormControl>
            <FormControl isInvalid={isInvalid} size="md" isRequired>
              <FormControlLabel>
                <FormControlLabelText>Password</FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1 border border-secondary-700" size="md">
                <InputField
                  type="password"
                  placeholder="password"
                  value={passwdVal}
                  onChangeText={(text) => setpasswdVal(text)}
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText>
                  Must be at least 6 characters.
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon
                  as={AlertCircleIcon}
                  className="text-error-500"
                />
                <FormControlErrorText className="text-error-500">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
            <FormControl
              isInvalid={
                isInvalid ||
                (confirmPass.length > 0 && confirmPass !== passwdVal)
              }
              size="md"
              isRequired
            >
              <FormControlLabel>
                <FormControlLabelText>Confirm Password</FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1 border border-secondary-700" size="md">
                <InputField
                  type="password"
                  placeholder="password"
                  value={confirmPass}
                  onChangeText={(text) => setconfirmPass(text)}
                />
              </Input>
              {confirmPass.length > 0 && confirmPass !== passwdVal && (
                <FormControlError>
                  <FormControlErrorIcon
                    as={AlertCircleIcon}
                    className="text-error-500"
                  />
                  <FormControlErrorText className="text-error-500">
                    Confirm password does not match the password.
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
            <Button
              className="w-fit self-center mt-4"
              size="lg"
              variant="solid"
              onPress={handleSubmit}
            >
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </VStack>
          <Box className="flex items-center mt-3 ">
            <Link href="/SignIn">
              <Text className="underline">Already have an account ?</Text>
            </Link>
          </Box>
        </Box>
      </VStack>
    </Center>
  );
};

export default SignUp;
