import {AsyncStorage} from 'react-native'
import {
    FACEBOOK_LOGIN_SUCCESS
} from './types'

//method for persistence in redux store
//asyncStorage.setitem('fbtoken, token)
//asyncstorage.getitem('fbtoekn)

//redux thunk works by returnig a function from our action creators 
//then thunk calls the function and passes in the dispatch function
//which allows us to dispatch a function at any time
export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token')
    if(token) {
        //dispatch action saying fb login is done
    } else {
        //start fb login 

    }

}



