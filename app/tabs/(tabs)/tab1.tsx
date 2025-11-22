import EditScreenInfo from "@/components/EditScreenInfo";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useNavigation, useRouter } from "expo-router";

export default function Tab2() {
  const router = useRouter();
  const loc = useNavigation();
  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Expo - Tab 1</Heading>
      <Divider className="my-[30px] w-[80%]" />
      <Button
        onPress={() => {
          router.back();
          console.log(loc.getState());
        }}
      >
        <Text>Back</Text>
      </Button>
      <Text className="p-4">Example below to use gluestack-ui components.</Text>
      <EditScreenInfo path="app/(app)/(tabs)/tab1.tsx" />
    </Center>
  );
}
