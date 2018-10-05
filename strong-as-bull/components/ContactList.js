/*import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import { Container } from "native-base";

*/

import React from 'react';

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';

const ContactList = props => {

    const list = ({allContacts}) => {
        if(allContacts) {
            return allContacts.map(item => {
                return (
                    <ListItem key={item.id} avatar>
                        <Left>
                            <Thumbnail source={{ uri: `${item.image}`}}/>
                        </Left>
                        <Body>
                            <Text>{`${item.first_name} ${item.last_name}`}</Text>
                            <Text note>{`${item.phone_number}`}</Text>
                            <Text note>{`${item.email}`}</Text>
                        </Body>
                        <Right style={{justifyContent: 'center'}}>
                            <Icon name="heart" style={{paddingRight: 5, fontSize: 30}} />
                        </Right>
                    </ListItem>
                )
            })
        }
    };
    return (
        <Container>
            <Header />
            <Content>
                <List>
                    {list(props)}
                </List>
            </Content>
        </Container>
    )
};

export default ContactList;


/*
export default class ContactList extends React.Component {

    //Prop er unchangable, State endres

    render() {
        return (
            <View>
                <Text> My name is {this.props.name} </Text>
                <Text> And my children are {this.props.children} </Text>
                <Text> {this.props.onClickAddContact("This is clicked asdf")} </Text>
            </View>
        )
    }

}

*/