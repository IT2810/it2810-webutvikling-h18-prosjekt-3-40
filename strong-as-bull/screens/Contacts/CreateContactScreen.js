import React from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class CreateContactScreen extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',

    };
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    New Contact
                </Text>
                <TextInput
                    style={styles.infoInput}
                    placeholder={"first name"}
                    onChangeText={(input)=> {
                        this.setState({
                            firstName: input,
                        })
                    }}
                />
                <TouchableOpacity
                    onPress = {() => {
                        //navigate, pass name
                        alert(this.state.firstName)
                    }}>
                    <Text style={styles.button}>
                       Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    infoInput: {
        height: 40,
        borderWidth: 2,
        borderColor: "#fff",
    }
});