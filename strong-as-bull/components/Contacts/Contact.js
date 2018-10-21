import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ListItem, Left, Body, Thumbnail } from 'native-base';

export default class Contact extends React.Component {

    //This code creates what is shown in every single item in the contactList.
    //When a contact is pressed, the app navigates to an overview of that contact
    //with that contacts data (ViewContact). The data shown in that view is passed from the contact component.
    //Were this not a demo app, more tie would have been spent on stying. Being a demo, we did not feel
    //the urge to give it much thought. For an example of usage of styles, see various other pages in this project.
    render() {

        return (
            <View key = {this.props.keyval}>
                    <ListItem key={this.props.keyval}
                              avatar button
                              onPress={()=> this.props.navigation.navigate('ViewContact', {contact: this.props.val}) }>

                        <Left >
                            <Thumbnail source={{ uri: this.props.val.image}} />
                        </Left>
                        <Body>
                            <Text style = {styles.name}> {this.props.val.first_name} {this.props.val.last_name}</Text>
                            <Text note style = {styles.phonenumber}>{this.props.val.phone_number} </Text>
                            <Text note style = {styles.company}>
                                {this.props.val.company === undefined ? 'Company' : this.props.val.company}
                            </Text>
                            <Text note style = {styles.email}>{this.props.val.email} </Text>
                        </Body>
                    </ListItem>
            </View>
        );
    }
}


const styles = StyleSheet.create({

});

