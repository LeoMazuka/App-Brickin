import { Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import { Box, Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'
import { LinearGradient } from 'react-native-svg';

type Props = IButtonProps & {
    title: string;
}


export function Button({ title, ...rest }: Props) {

   /*  const App = () => {
        return <Box bg={{
            linearGradient: {
                colors: ['lightBlue.300', 'violet.800'],
                start: [0, 0],
                end: [1, 0]
            }
        }} p="12" rounded="xl" _text={{
            fontSize: 'md',
            fontWeight: 'medium',f
            color: 'warmGray.50',
            textAlign: 'center'
        }}>
            This is a Box with Linear Gradient
        </Box>;
    };
      
      const config = {
        dependencies: {
            'linear-gradient': LinearGradient
        }
    }; */

    return (
   <ButtonNativeBase
            { ...rest }
            w = { "full"}
            h = { "16"}
            bg = { "#E8770D"}
            _pressed = {{
            bg: "#A55B16",
        }}
        >

    <Text fontFamily={'Urbanist_700Bold'} color="white">{title}</Text>
        </ButtonNativeBase >
    )
}