import React from 'react'
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useStore } from '../stores/store';
import { mainStyle } from '../styles/styles';
import ReloadButton from './additionals/reloadButton';

const ErrorView = () => {
    const { weatherStore } = useStore();
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={mainStyle.errorContent}
    >
        <Text style={mainStyle.errorText}>{weatherStore.errorMessage}</Text>
        <Icon
          name="exclamation-circle"
          type="font-awesome"
          color="red"
          size={100}
        />
        <ReloadButton/>
        </KeyboardAvoidingView>
    )
}

export default ErrorView
