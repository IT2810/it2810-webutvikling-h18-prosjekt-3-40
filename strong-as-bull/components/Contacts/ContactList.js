/*import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import { Container } from "native-base";

*/

import React from 'react';

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

const swipeSettings = {
    autoClose: true,
        right: [
            {
                onPress: () => {
                    props.navigation.navigate('CreateContact')
                },
                text: "Edit", type: 'edit',
            },
            {
                onPress: () => {
                    props.deleteContact(key);
                },
                text: "Delete", type: 'delete',
            }
        ],

};


const ContactList = props => {
    const list = ({allContacts}) => {
        if(allContacts) {
            return allContacts.map(item => {
                return (
                        <Swipeout {...swipeSettings} key = {item.id} style={{backgroundColor: '#fff'}}>
                            <ListItem key={item.id} avatar button onPress={()=>props.navigation.navigate('ViewContact', {contact:item}) }>
                                <Left style={{justifyContent: 'center'}}>
                                    <Thumbnail source={{ uri: item.image}} />
                                </Left>
                                <Body>
                                    <Text>{item.first_name} {item.last_name}</Text>
                                    <Text note>{item.phone_number}</Text>
                                    <Text note>Company</Text>
                                    <Text note>{item.email}</Text>
                                </Body>

                            </ListItem>
                        </Swipeout>
                )
            })
        }
    };

    return (
        <Content>
            <List>
                {list(props)}
            </List>
        </Content>
    );
};



export default ContactList;