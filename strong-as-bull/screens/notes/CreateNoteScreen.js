import React from 'react';

import {
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class CreateNoteScreen extends React.Component {

//Initiates a note
    constructor(props) {
        super(props);
        this.state = {
            title: 'No title',
            description: '',
            note: null,
            key: null,
            chosenOne: null,
        };

    }

//Sets note values
    componentDidMount() {
        try {
            this.setState({
                note: this.props.navigation.state.params.note,
                title: this.props.navigation.state.params.note.title,
                description: this.props.navigation.state.params.note.description,
                key: this.props.navigation.state.params.key,

            });

        } catch (error) {
            this.setState({note: null})
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Note Info'
        };
    };

    triggerAddNote(){
        this.props.navigation.state.params.addMethod(this.state.chosenOne);
    }

    triggerEditNote(){
        this.props.navigation.state.params.editMethod(this.state.chosenOne, this.state.key);
    }

//Renders how the create note screen is viewed
    render() {
        return (
            <ScrollView style={styles.container}>

                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.note === null?
                            'Title' : this.state.note.title
                    }
                    onChangeText={(input) => {
                        this.setState({
                            title: input,
                        })
                    }}
                />
                <TextInput
                    style={styles.infoInput}
                    placeholder={
                        this.state.note === null?
                            'Description' : this.state.note.description
                    }
                    onChangeText={(input) => {
                        this.setState({
                            description: input,
                        })
                    }}
                />

                <TouchableOpacity style = {styles.addButton} onPress={() => {
                    if (this.state.description === '') {
                        alert('Please fill in description')
                    } else {
                        let newNote = {
                            title: this.state.title,
                            description: this.state.description,
                        };
                        this.state.chosenOne = newNote;
                        if (this.state.note === null) {
                            this.triggerAddNote();
                        } else {
                            this.triggerEditNote();
                        }

                        this.props.navigation.navigate('NoteList');
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