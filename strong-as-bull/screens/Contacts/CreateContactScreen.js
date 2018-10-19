import React from 'react';

import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { ImagePicker, Permissions} from 'expo';
import {Icon, Thumbnail} from "native-base";

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

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contact Info',
        };
    };

    triggerAddContact(){
        console.log(this.props.navigation.state.params);
        console.log("Over are options");
        //this.props.navigation.state.params.addMethod();
    }

    triggerEditContact(){
        this.props.navigation.state.params.editMethod.bind(this);
        //this.props.navigation.state.params.editMethod(this.state.chosenOne);
        console.log("Over are options");
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
                <TouchableOpacity onPress= {() => {
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
});