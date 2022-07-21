import { Heading, VStack, Icon, useTheme } from "native-base";

import { Envelope } from "phosphor-react-native"
import Logo from "../assets/logo_primary.svg";

import { Input } from "../components/input";
import { Button } from "../components/Button";

interface ImageProps {
  src?: string;
}
export function SignIn() {
  const { colors } = useTheme();

  return (
    <VStack
      flex={1}
      alignItems="center"
      bg="gray.600"
      px={8}
      pt={24}
    >
      <img src={Logo} width={200} />
      <Heading
        color="gray.100"
        fontSize="xl"
        mt={20}
        mb={6}
      >
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        marginBottom={4}
        width={"100%"}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={3}/>}
      />
      <Input
        placeholder="Senha"
        width={"100%"}
        secureTextEntry={true}
      />
      <Button />
    </VStack>
  )
}
