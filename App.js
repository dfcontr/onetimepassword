import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBq_XRzAJ8zmkfQCn2f2o_WfPXuJiMvalY",
      authDomain: "one-time-password-1f02b.firebaseapp.com",
      databaseURL: "https://one-time-password-1f02b.firebaseio.com",
      projectId: "one-time-password-1f02b",
      storageBucket: "one-time-password-1f02b.appspot.com",
      messagingSenderId: "1065506458521"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
