import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Thumbnail} from "native-base";

export default class ViewContactScreen extends React.Component{

    constructor(props) {
        super(props);
        this.setState({
            contact: this.props.navigation.state.params.contact,
        });
    }

    /*componentDidMount(){
        this.setState({contact: this.props.navigation.state.params.contact});
    }*/


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.picture}>
                    <Thumbnail source={{ uri: this.state.contact.image}} large style={styles.thumbnail} />
                </View>
                <Text style={styles.name}>
                    {this.state.contact.first_name} {this.state.contact.last_name}
                </Text>
               <Text style={styles.info}>
                   {this.state.contact.phone_number}
               </Text>
                <Text style={styles.info}>
                    {this.state.contact.email}
                </Text>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 50,
    },
    name: {
        padding: 10,
        fontSize: 35,
        justifyContent: 'center',
        textAlign: 'center',
    },
    info: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
    picture: {
        alignItems: 'center',
    },
    thumbnail: {
        height: 200,
        width: 200,
        borderWidth: 5,
        borderColor: '#999',
    }
});