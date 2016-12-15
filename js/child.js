import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    Image,
    View,
    TouchableHighlight
} from 'react-native';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
export default class MySence extends Component {
    static p = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Image source={require('.././image/splash.png')} style={{ width: width, height: height }} >
                <Text>{'标题    ' + this.props.title + '\n'}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>下一页{'\n'}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>上一页{'\n'}</Text>
                </TouchableHighlight>
                </Image>
            </View >
        )
    }

} 