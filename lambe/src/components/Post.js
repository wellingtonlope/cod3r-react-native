import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const { image, email, comments, nickname } = this.props
        return (
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <Author email={email} nickname={nickname} />
                <Comments comments={comments} />
                <AddComment />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
    },
})

export default Post
