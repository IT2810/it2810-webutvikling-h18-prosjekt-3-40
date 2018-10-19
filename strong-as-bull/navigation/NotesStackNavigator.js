import NoteListScreen from "../screens/notes/NoteListScreen";
import CreateNoteScreen from "../screens/notes/CreateNoteScreen";
import ViewNoteScreen from "../screens/notes/ViewNoteScreen";

import React from 'react';
import {createStackNavigator} from 'react-navigation'



const NotesStackNavigator = createStackNavigator({
    NoteList: NoteListScreen,
    CreateNote: CreateNoteScreen,
    ViewNote: ViewNoteScreen,
},{
    headerMode: 'float',
});

export default NotesStackNavigator;