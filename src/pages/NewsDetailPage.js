import React, { Component } from 'react';

import { BackAndroid, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// External Libraries
import Icon from 'react-native-vector-icons/MaterialIcons';

// Components
import NavBar from './../components/navBar';
import Counts from './../components/Counts';

var {width, height} = Dimensions.get('window')

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  _navigator.pop();
  return true;
});

class NewsDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    _navigator = this.props.navigator;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
          <ScrollView style={{height: height - 200}}>
            <Image source={{uri: item.imageUrl, height: 300}}
                   style={styles.image}>
               <View style={styles.innerImage}>
                 <Text style={styles.title}>
                   { item.title }
                 </Text>
                 <Text style={styles.speakerText}>By { item.speaker }</Text>
               </View>
             </Image>
            <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
             { item.body } Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <NavBar
              leftText={<Icon name="keyboard-backspace" size={30} />}
              onLeftPress={ () => {
                _navigator.pop()
              }}
              containerStyle={{backgroundColor: 'transparent'}}
              colorText='#eee' />

          </ScrollView>
          <Counts item={item} style={{height: 200}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  innerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200
  },
  title: {
    margin: 15,
    fontSize: 28,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  speakerText: {
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 5,
    fontSize: 16,
  },
  description: {
    margin: 15,
    marginTop: 7,
    textAlign: 'justify',
  },
  floatFooter: {
    position: 'absolute',
    bottom: 0
  }
})

export default NewsDetailPage;
