import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

/**
 * Modal used over the application to popup information
 * to user, receive by props a text to show, a flag indicating
 * if the modal is visible or not, the reference to navigation stack
 * and string indicating a page to navigate after close the modal if needs.
 *
 */
export default class PModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalVisible: props.showModal,
            text: props.text
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            modalVisible: nextProps.showModal,
            text: nextProps.text,
        });
    }

    /**
     * change the state to false
     * to not render the modal
     */
    closeModal() {
        this.setState({modalVisible:false});
    }

    render() {
        return (
                <Modal
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.closeModal()}
                    transparent={true}
                    animationType={'fade'}
                    presentationStyle = {'overFullScreen'}
                    onDismiss = {() => !!this.props.pageToNavigate && this.props.pageToNavigate !== '' ? this.props.navigation.navigate(this.props.pageToNavigate) : {} }
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.text}>{this.state.text}</Text>
                            <View style={styles.button}>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Fechar"
                            />
                            </View>
                        </View>
                    </View>
                </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    innerContainer: {
        flexDirection: 'column',
        width: '80%',
        backgroundColor: 'rgba(255,255,255,0.95)',
        padding: 10,
    },
    text: {
        marginVertical: 20,
        textAlign: 'center'
    },
    button: {
       borderRadius: 1,
       borderWidth: 1
    }
});