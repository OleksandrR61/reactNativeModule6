import { useState } from "react";
import { useDispatch } from "react-redux";
import { Keyboard, View, Text } from "react-native";

import {
    Container,
    InnerContainer,
    PageHeader,
    Form,
    FormInput,
    FormSecretInput,
    BtnPrime,
    BtnAdditional,
} from "../../../components";
import { authSignIn } from "../../../redux/auth/authOperations";

const INITIALSTATE = {
    EMAIL: '',
    PASSWORD: '',
    ISLOADING: false,
};

const LoginScreen = ({navigation}) => {
    const [ email, setEmail ] = useState(INITIALSTATE.EMAIL);
    const [ password, setPassword ] = useState(INITIALSTATE.PASSWORD);
    const [ isLoading, setIsLoading ] = useState(INITIALSTATE.ISLOADING);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        Keyboard.dismiss();
        setIsLoading(true);

        dispatch(authSignIn({email, password}));

        setEmail(INITIALSTATE.EMAIL);
        setPassword(INITIALSTATE.PASSWORD); 
        setIsLoading(INITIALSTATE.ISLOADING);       
    };

    const isBtnDisabled = !email || !password || isLoading;

    return (
        <Container>
            <InnerContainer>
                <PageHeader style={{paddingTop: 32}}>Увійти</PageHeader>
                <Form style={{paddingBottom: 132}}>
                    <FormInput
                        placeholder='Адреса електронної пошти'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                    <FormSecretInput
                        placeholder='Пароль'
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <BtnPrime
                        onPress={handleSubmit}
                        disabled={isBtnDisabled}
                        style={isBtnDisabled && {backgroundColor: "#F6F6F6"}}                        
                    >
                        <Text style={isBtnDisabled && {color: "#BDBDBD"}}>
                            {isLoading ? "Очікуйте..." : "Увійти"}
                        </Text>
                    </BtnPrime>
                    <View style={{
                        marginTop: 16,
                        flex: 1,
                        flexDirection: "row",
                        alignSelf: 'center',
                    }}>
                        <Text  style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 16,
                            lineHeight: 19,
                            color: '#1B4371'                            
                        }}>
                            Немає акаунту?{" "}
                        </Text>
                        <BtnAdditional
                            styleText={{textDecorationLine: "underline"}}
                            onPress={() => navigation.navigate("RegistrationScreen")}
                        >
                            Зареєструватися
                        </BtnAdditional>
                    </View>
                </Form>
            </InnerContainer>
        </Container>
    );
};

export default LoginScreen;