import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
    

        <View style={styles.browser}>
        <WebView source={{ uri: 'https://player.vimeo.com/video/146961643' }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  browser: {
    flex: 1,
    flexDirection: 'row'
  },
  header: {
    height: 65,
    paddingTop: 25,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
});
