import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Footer from './Footer';
import { useSelector } from 'react-redux';

const PageChange = () => {

    const globalState = useSelector(state => state)
    console.log(globalState.footer)

    function renderPage () {
        if(globalState.footer.PAGE == 'one') {
            return <PageOne />
        } else if (globalState.footer.PAGE == 'two') {
            return <PageTwo />
        } else {
            return <PageThree />
        }
    }

    return (
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
            {renderPage()}
            <Footer />
        </View>
    );
}

export default PageChange;