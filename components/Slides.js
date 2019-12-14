import React,{Component} from 'react' 
import {View, Text, ScrollView} from 'react-native'

class Slides extends Component {
    renderSlides(){
        return this.props.data.map((slide) => {

            return (
                <View key={slide.text} style={styles.slideStyle}>
                    <Text style={styles.slideText}> {slide.text} </Text>
                </View>
            )

        })
    }
    render(){
        return(
            <ScrollView
                horizontal
                >
                {this.renderSlides()}
            </ScrollView>  
        )
    }
}

const styles = {
    slideStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideText: {
        fontSize: 20,
    }
}

export default Slides;