import {AsyncStorage} from 'react-native'
import * as Facebook from 'expo-facebook'
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types'

const appId = '565826070869566'
//method for persistence in redux store
//asyncStorage.setitem('fbtoken, token)
//asyncstorage.getitem('fbtoekn)

//redux thunk works by returnig a function from our action creators 
//then thunk calls the function and passes in the dispatch function
//which allows us to dispatch a function at any time
export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token')
    console.log('facebook log')
    if(token) {
        console.log('facebook log token')
        //dispatch action saying fb login is done
        dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        console.log('facebook log token2')
        //console.log(type)
        //start fb login 
        doFacebookLogin(dispatch)
    }
}


const doFacebookLogin = async dispatch => {
    await Facebook.initializeAsync(appId)

    console.log('dispatch dofacebook')
    let {type, token} = await Facebook.logInWithReadPermissionsAsync(appId, {
        permissions: ['public_profile']
    });
    console.log('type return')
    console.log(type)
    //this runs if we get a type back of 'cancel' from facebook
    if (type=== 'cancel') {
        //WE GET ACCESS TO DISPATCH FROM THUNK
        //THIS IS A HELPER FUNCTION SO WE USE have to pass dispatch as a param
        return dispatch({type: FACEBOOK_LOGIN_FAIL})
    }
    await AsyncStorage.setItem('fb_token', token)
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
}
