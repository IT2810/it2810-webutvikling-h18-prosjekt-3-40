import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, AsyncStorage, Alert} from "react-native";

import {Icon} from 'native-base';

import Note from "../../components/Note.js";
import Swipeout from "react-native-swipeout";

export default class NoteListScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Notes',
            headerRight: (
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('CreateNote',{
                        addMethod: navigation.state.params.addMethod,
                        editMethod: navigation.state.params.editMethod,
                    });
                }}>
                    <Icon name={'ios-add-outline'} style={styles.newNoteButton}/>
                </TouchableOpacity>

            ),
        };
    };


    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
    }

    componentDidMount(){
        //DUMMY DATA
        this.fetchData();
        this.props.navigation.setParams ({
            addMethod: this.addNote.bind(this),
            editMethod: this.editNote.bind(this),
        })
    }

    render() {

        let notes = this.state.notes.map((val, key) => {
            return <Swipeout{ ... {
                autoClose: true,
                right: [
                    {
                        onPress: () => {
                            this.props.navigation.push('CreateNote', {
                                note: val,
                                key: key,
                                addMethod: this.addNote.bind(this),
                                editMethod: this.editNote.bind(this),

                            })
                        },
                        text: "Edit", type: 'edit',
                    },
                    {
                        onPress: () => {
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to delete this note?',
                                [
                                    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                    {text: 'Yes', onPress: () =>(this.deleteNote(key))}

                                ],
                                {cancelable: true}

                            );
                        },
                        text: "Delete", type: 'delete',
                    },

                ],

            }
                            }
                            key = {key}
                            style={styles.swipeOut}>
                <Note
                    key = {key}
                    keyval = {key}
                    val = {val}
                    navigation={ this.props.navigation }
                />
            </Swipeout>

        });

        return (
            <ScrollView>
                {notes}
            </ScrollView>

        );
    }

    addNote(newNote) {
        let newList = this.state.notes;
        newList.push(newNote);
        this.setState({
            notes: newList,
        });
        this.saveData();
    }


    editNote(newNote, key){
        let newList = this.state.notes;
        newList[key] = newNote;
        this.setState({notes: newList});
        this.saveData();
    }

    saveData() {
        let allNotes = JSON.stringify(this.state.notes);
        AsyncStorage.setItem('allNotes', allNotes);
    };

    fetchData = async () => {
        try {
            let allnotes = JSON.parse(await AsyncStorage.getItem('allNotes'));
            if (allnotes != null) {
                this.setState({notes: allnotes});
            }

        } catch (error) {
            alert(error);
        }
    };

    deleteNote(key) {
        let newList = this.state.notes;
        newList.splice(key, 1);
        this.setState({
            notes: newList,
        });
        this.saveData();
    };


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    newNoteButton: {
        marginRight: 20,
    },
    swipeOut: {
        backgroundColor: '#fff'
    },
});

