import React, {Component} from 'react'
import {View, Text, Platform} from 'react-native'
import {navigation, screenProps} from 'react-navigation'
import {Button} from 'react-native-elements'

class ReviewScreen extends React.Component{
        static navigationOptions =({navigation, screenProps}) => ({
            title:'Review Jobs',
            headerRight: 
            <Button 
                title='Settings' 
                onPress={() => navigation.navigate('settings') }
                type='clear'
                titleStyle={{
                    color:'rgba(0,122,255,1)'
                }}
                
                />,
                style:{
                    marginTop: Platform.OS === 'android' ? 24: 0
                }
        }
    )

    

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