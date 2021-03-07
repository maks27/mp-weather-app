import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { mainStyle } from '../../styles/styles'

const LoadingSpinner = () => {
    
    return (
        <View style={mainStyle.loadingIndicator}>
        <ActivityIndicator size="large" color="black" />
        </View>
    )
}

export default LoadingSpinner
