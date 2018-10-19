import React from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { ImagePicker, Permissions} from 'expo';

export default class CreateContactScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: 'JohnApple@america.com',
            phoneNumber: '99912345',
            company: 'Company',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            contact: null,
            key: null,
            chosenOne: null,
        };

    }

    componentDidMount() {
        try {
            this.setState({
                contact: this.props.navigation.state.params.contact,
                firstName: this.props.navigation.state.params.contact.first_name,
                lastName: this.props.navigation.state.params.contact.last_name,
                email: this.props.navigation.state.params.contact.email,
                phoneNumber: this.props.navigation.state.params.contact.phone_number,
                image: this.props.navigation.state.params.contact.image,
                company: this.props.navigation.state.params.contact.company,
                key: this.props.navigation.state.params.key,

            });

        } catch (error) {
            this.setState({contact: null})
        }
    }

    triggerAddContact(){
        console.log(this.props.navigation.state.params);
        console.log("Over are options");
        this.props.navigation.state.params.addMethod(this.state.chosenOne);
    }

    triggerEditContact(){
        console.log(this.props.navigation.state.params);
        console.log("Over are options");
        this.props.navigation.state.params.editMethod(this.state.chosenOne);
    }

    render()
    {
        let { image } = this.state;

        return (
            <View>
                <Text style={styles.title}>
                    {this.state.contact === null? 'New Contact' : "Edit Contact"}
                </Text>
                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.contact === null?
                            'First Name' : this.state.contact.first_name
                    }
                    onChangeText={(input) => {
                        this.setState({
                            firstName: input,
                        })
                    }}
                />
                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.contact === null?
                            'Last Name' : this.state.contact.last_name
                    }
                    onChangeText={(input) => {
                        this.setState({
                            lastName: input,
                        })
                    }}
                />
                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.contact === null?
                            'Phone number' : this.state.contact.phone_number
                    }
                    onChangeText={(input) => {
                        this.setState({
                            phoneNumber: input,
                        })
                    }}
                />
                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.contact === null?
                            'E-mail' : this.state.contact.email
                    }
                    onChangeText={(input) => {
                        this.setState({
                            email: input,
                        })
                    }}
                />
                <TextInput
                    style={styles.infoInput}
                    placeholder={
                            'Company'
                    }
                    onChangeText={(input) => {
                        this.setState({
                            company: input,
                        })
                    }}
                />
                <TouchableOpacity onPress={() => {
                    let newCon = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        phoneNumber: this.state.phoneNumber,
                        company: this.state.company,
                        image: this.state.image,
                    };
                    this.state.chosenOne = newCon;
                    if (this.state.contact === null) {
                        console.log("create new");
                        console.log(newCon);
                        this.triggerAddContact();

                    } else {
                        console.log("Update old");
                        console.log(this.state.chosenOne);
                        this.triggerEditContact();
                    }

                    }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }}


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