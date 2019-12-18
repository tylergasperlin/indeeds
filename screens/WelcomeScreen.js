import React, {Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import Slides from '../components/Slides'
import {AppLoading} from 'expo'
import _ from 'lodash'


const SLIDE_DATA = [
    {text: 'Welcome to Indeeds', color: '#03A9F4'},
    {text: 'Use this app to get a job', color: '#009688'},
    {text: 'Set your location then swipe away', color: '#03A9F4'}
]


class WelcomeScreen extends React.Component{
    state = {token: null}

    constructor(props) {
        super(props);

        this.setToken()
    }

    async setToken(){
        let token = await AsyncStorage.getItem('fb_token');

        if(token){
            this.props.navigation.navigate('map')
            this.setState({token})
        } else{
            this.setState({token:false})
        }
    }


    onSlidesComplete = (navigation) => {
        //we get access to navigate function from react navigation library
        //since we render welcome screen with navigation we get a prop of navigation passed to our components
        this.props.navigation.navigate('auth')
    }

    render(){
        if(_.isNull(this.state.token)){
            return <AppLoading/>
        }
        return(
            <View style={{flex:1}}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            </View>
        )
    }

}


export default WelcomeScreen;