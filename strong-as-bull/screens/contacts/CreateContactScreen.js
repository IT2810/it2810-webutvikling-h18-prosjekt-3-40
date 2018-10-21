import React from 'react';

import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

//Usable if choose photo:
//import { ImagePicker, Permissions} from 'expo';

import { Thumbnail} from "native-base";

export default class CreateContactScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: 'JohnApple@america.com',
            phone_number: '99912345',
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
                first_name: this.props.navigation.state.params.contact.first_name,
                last_name: this.props.navigation.state.params.contact.last_name,
                email: this.props.navigation.state.params.contact.email,
                phone_number: this.props.navigation.state.params.contact.phone_number,
                image: this.props.navigation.state.params.contact.image,
                company: this.props.navigation.state.params.contact.company,
                key: this.props.navigation.state.params.key,

            });

        } catch (error) {
            this.setState({contact: null})
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contact Info'
        };
    };

    triggerAddContact(){
        this.props.navigation.state.params.addMethod(this.state.chosenOne);
    }

    triggerEditContact(){
        this.props.navigation.state.params.editMethod(this.state.chosenOne, this.state.key);
    }

    render()
    {
        let { image } = this.state;

        return (
            <ScrollView style={styles.container}>

                <View style={styles.picture}>
                    <Thumbnail source={{ uri: this.state.image}} large style={styles.thumbnail} />
                </View>

                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.contact === null?
                            'First Name' : this.state.contact.first_name
                    }
                    onChangeText={(input) => {
                        this.setState({
                            first_name: input,
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
                            last_name: input,
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
                            phone_number: input,
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

                <TouchableOpacity style = {styles.addButton} onPress={() => {
                    if (this.state.first_name === '' || this.state.last_name === '') {
                        alert('Please enter at least first and last name')
                    } else {
                        let newCon = {
                            first_name: this.state.first_name,
                            last_name: this.state.last_name,
                            email: this.state.email,
                            phone_number: this.state.phone_number,
                            company: this.state.company,
                            image: this.state.image,
                        };
                        this.state.chosenOne = newCon;

                        if (this.state.contact === null) {
                            this.triggerAddContact();
                        } else {
                            this.triggerEditContact();
                        }

                        this.props.navigation.navigate('ContactList');

                    }
                }
                }>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 10,
    },
    title: {
        fontSize: 35,
        justifyContent: 'center',
        textAlign: 'center',
        paddingBottom: 30,
    },
    infoInput: {
        fontSize: 20,
        padding: 20,
        backgroundColor: "#eee",
    },

    picture: {
        alignItems: 'center',
        padding: 20,
    },
    thumbnail: {
        height: 200,
        width: 200,
        borderWidth: 5,
        borderColor: '#999',
    },
    addButton: {
    position: 'absolute',
        zIndex: 11,
        top: 20,
        right: 20,
        backgroundColor: '#ccc',
        width: 50,
        height: 50,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    buttonText: {

    }
});