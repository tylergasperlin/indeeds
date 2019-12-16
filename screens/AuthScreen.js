import React,{Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions/auth_actions'

class AuthScreen extends Component{
    componentDidMount(){
        this.props.facebookLogin()
        //following allows us to remove token for testing
        //AsyncStorage.removeItem('fb_token')

        this.onAuthComplete(this.props)
    }
    //called before component is rerendered (replaces component will receive props)
    //next props are the props that will be received upon rerender
    componentDidUpdate(nextProps){
        this.onAuthComplete(nextProps)
    }

    onAuthComplete(props){
        if(this.props.token){
            this.props.navigation.navigate('map')
        }
    }


    render(){
        return(
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        )
    }
}

mapStateToProps = ({auth}) => {
    return {token: auth.token}
}

export default connect(mapStateToProps, actions) (AuthScreen);