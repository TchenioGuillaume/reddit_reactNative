import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class detailPost extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text onPress={() => this.props.navigation.toggleDrawer() }>Detail du post</Text>
            </View>
        );
    }
}