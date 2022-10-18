import { Button, ChakraProvider } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Hello World</h1>
      <p>Hello World</p>
      <br />
      <PhoneIcon />
      <br />
      <AddIcon w={10} h={10} />
      <br />
      <WarningIcon w={75} h={75} color="red.500" />
      <br />
      <Button colorScheme="blue">ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
