import React from "react";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { Text } from "@/components/ui/text";

export default function Home() {
  const router = useRouter();
  return (
    <Box className="flex-1 h-screen justify-end  py-safe px-safe ">
      <Box className=" mb-10 flex-row justify-center gap-3 ">
        <Button
          className="w-32 rounded-xl"
          onPress={() => router.push("/SignIn")}
        >
          <ButtonText className="capitalize">log in</ButtonText>
        </Button>
        <Button
          className="w-32 rounded-xl"
          onPress={() => router.push("/SignUp")}
        >
          <ButtonText className="capitalize">sign up</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}

// <Box className="flex-1 bg-background-300 h-[100vh]">
//   <Box
//     pointerEvents="none"
//     className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]"
//   >
//     <Gradient />
//   </Box>
//   <ScrollView
//     style={{ height: "100%" }}
//     contentContainerStyle={{ flexGrow: 1 }}
//   >
//     <Box className="flex flex-1 items-center mx-5 lg:my-24 lg:mx-32 py-safe">
//       <Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
//         <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start">
//           <Text className="text-white font-medium">
//             Get started by editing bhvhvfg
//           </Text>
//           <Text className="text-white font-medium ml-2">
//             ./App.tsx or ./app/index.tsx (or whatever entry point you have)
//           </Text>
//         </Box>
//         <Button
//           size="md"
//           className="bg-primary-500 px-6 py-2 rounded-full"
//           onPress={() => {
//             router.push("/tabs/tab1");
//           }}
//           // pointerEvents="none"
//         >
//           <ButtonText>Explore Tab Navigation</ButtonText>
//         </Button>
//         <Pressable
//           style={{ backgroundColor: "red", padding: 20 }}
//           onPress={() => console.log("pressed")}
//         >
//           <Text>Test</Text>
//         </Pressable>
//       </Box>
//       <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
//         <Logo />
//       </Box>
//     </Box>
//     <ModalScreen />
//   </ScrollView>
// </Box>

// <Box className="flex-1 bg-background-300 h-[100vh]">
//   <Box
//     pointerEvents="none"
//     className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]"
//   >
//     <Gradient />
//   </Box>
//   <ScrollView
//     style={{ height: "100%" }}
//     contentContainerStyle={{ flexGrow: 1 }}
//   >
//     <Box className="flex flex-1 items-center mx-5 lg:my-24 lg:mx-32 py-safe">
//       <Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
//         <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start">
//           <Text className="text-white font-medium">
//             Get started by editing bhvhvfg
//           </Text>
//           <Text className="text-white font-medium ml-2">
//             ./App.tsx or ./app/index.tsx (or whatever entry point you have)
//           </Text>
//         </Box>
//         <Button
//           size="md"
//           className="bg-primary-500 px-6 py-2 rounded-full"
//           onPress={() => {
//             router.push("/tabs/tab1");
//           }}
//           // pointerEvents="none"
//         >
//           <ButtonText>Explore Tab Navigation</ButtonText>
//         </Button>
//         <Pressable
//           style={{ backgroundColor: "red", padding: 20 }}
//           onPress={() => console.log("pressed")}
//         >
//           <Text>Test</Text>
//         </Pressable>
//       </Box>
//       <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
//         <Logo />
//       </Box>
//     </Box>
//     <ModalScreen />
//   </ScrollView>
// </Box>
