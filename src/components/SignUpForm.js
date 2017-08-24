import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-1f02b.cloudfunctions.net'

class SignUpForm extends Component {
    state = { phone: '' };

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }

    // ES7: Avoid having to call .bind(this).
    // Still get a reference to 'this' inside function
    // Use ES7 Async/Await.
    handleSubmit = async () => {
        // Await: Does not change how JS behaves.
        // Wait for current line to be resolved before 
        // passing to the next one
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
        } catch (err) {
            console.log(err);
        }
    }

    /*handleSubmit = () => {
        axios.post(`${ROOT_URL}/createUser`, {
            phone: this.state.phone
        })
            .then(() => {
                axios.post(`${ROOT_URL}/requestOneTimePassword`, {
                    phone: this.state.phone
                })
            })
    }*/
}

export default SignUpForm;