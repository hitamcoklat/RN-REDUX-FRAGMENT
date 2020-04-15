import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';

const PageOne = () => {
    const globalState = useSelector(state => state);
    return (
        <View>
            <Text>Halaman Pertama {globalState.state}</Text>
        </View>
    )
}

export default PageOne;
