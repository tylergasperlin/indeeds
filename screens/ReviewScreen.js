import React, {Component} from 'react'
import {View, Text} from 'react-native'

class ReviewScreen extends React.Component{
    static navigationOptions = {
        //these are properties of the create stack navigatior within app.js
           title: 'Review Jobs'
/*            header: () => {
/*                return {
                   //more properties of stack nav
                   right: <Text>Go Right Do Right</Text>
             //  } */
           //} 

    }

    render(){
        return(
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        )
    }

}


export default ReviewScreen;