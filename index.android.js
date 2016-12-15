/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    ListView,
    ScrollView,
    Navigator,
    Image,
    View
} from 'react-native';

import MySence from './js/child'

export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                initialRoute={{ title: '场景', index: 0 }}
                renderScene={(route, navigator) => {
                    return <MySence
                        title={route.title}
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop()
                            }
                        } }


                        onForward={() => {
                            const next = route.index + 1;
                            navigator.push({
                                title: '场景' + next,
                                index: next
                            });
                        }
                        }
                        />
                } }
                />
        );
    }
}

AppRegistry.registerComponent('Test', () => Test);
