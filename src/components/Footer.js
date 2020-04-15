import React, { Component } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setFooter } from "../redux/actions";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { setFooter : "" };
    }

    updateFooter = setFooter => {
        this.setState({ setFooter })
    }

    handleSetFooter = (val) => {
        // console.log(val)
        this.props.setFooter(val);
        // this.setState({ setFooter: "" })
    }

    render() {

        return (
            <View style={{ backgroundColor: 'white', flexDirection: 'row', borderTopWidth: 0.3, borderTopColor: '#4E4E4E', paddingVertical: 8 }}>
                <TouchableOpacity
                onPress={() => this.handleSetFooter('one')} 
                style={{ width: '25%', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36 }} source={require('../../assets/icon-footer-home.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: '#4E4E4E' }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.handleSetFooter('two')}
                style={{ width: '25%', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36 }} source={require('../../assets/icon-footer-riwayat.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: '#4E4E4E' }}>Riwayat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleSetFooter('three')}
                style={{ width: '25%', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36 }} source={require('../../assets/join-icon.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: '#4E4E4E' }}>Join Rekber</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36 }} source={require('../../assets/icon-footer-akun.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold', color: '#4E4E4E' }}>Akun</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(
    null,
    { setFooter }
)(Footer)