import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 18,
        textAlign: "left",
        fontStyle: "normal",
        color: 'blue',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 150,
        width: 150,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    mainContainer: {
        marginTop: 10,
        alignItems: 'center',
        marginLeft: -5
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    }
});

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );
}

const CustomRow = ({ title, description, image_url }) => (
    <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} >
        </Image>
        <View style={styles.container_text}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                {/* <WebView
                    originWhitelist={['*']}
                    source={{ html: '<p>`${description}`</p>' }} /> */}
            </View>
            {/* <View style={styles.helpContainer}>
                <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                    <Text style={styles.helpLinkText}>See more!</Text>
                </TouchableOpacity>
            </View> */}
        </View>

    </View>
);



export default CustomRow;