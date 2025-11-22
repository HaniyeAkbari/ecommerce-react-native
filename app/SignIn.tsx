import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Link, useRouter } from "expo-router";
import React from "react";

const SignIn = () => {
  const router = useRouter();
  return (
    <Center className="flex-1  py-safe h-screen">
      <Box className="  w-full   ">
        <Text onPress={() => router.push("/")}>jdjndjnd</Text>
      </Box>
    </Center>
  );
};

export default SignIn;
