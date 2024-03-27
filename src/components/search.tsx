import { Input as SearchNativeInput, IInputProps } from 'native-base';


export function Search({ ...rest }:  IInputProps) {
    return (
        <SearchNativeInput 
        width="100%" 
        borderRadius="4" 
        py="3" 
        px="1" 
        fontSize="14" 
        w='full'
        {...rest}

        
        />
    );
};