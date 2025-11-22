import React from "react";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  return (
    <Center className="flex-1  py-safe h-screen">
      <Box className="  w-full   ">
        <Text onPress={() => router.push("/")}>sign up</Text>
      </Box>
    </Center>
  );
};

export default SignUp;
