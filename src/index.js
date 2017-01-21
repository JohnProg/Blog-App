import React, { Component } from 'react';

import { ListView, StyleSheet, Text, TextInput, View } from 'react-native';

// Components
import NavBar from './components/NavBar';
import PostList from './components/PostList';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const data = [],
          images = [
            "https://images.unsplash.com/photo-1441311956160-78a471e0638d?dpr=2&auto=format&fit=crop&w=500&h=500&q=80&cs=tinysrgb&crop=",
            "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?dpr=2&auto=format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=",
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?dpr=2&auto=format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=",
            "https://images.unsplash.com/photo-1481487196290-c152efe083f5?dpr=2&auto=format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop="
          ];
    let count = 0;

    for (var i = 0; i < 20; i++) {
      count = count > 3 ? 0 : count;
      data.push({
        id: i + 1,
        imageUrl: images[count],
        title: `Evento ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: 230,
        likes: 9,
        speaker: 'John Machahuay'
      });
      count++;
    }

    this.state = {
      posts: dataSource.cloneWithRows(data)
    };
  }
  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>

        <PostList
          items={ posts }
        />

        <NavBar
          title="Inicio"
          leftText = "1"
          rightText = "2"
          onLeftPress={ () => {

          }}
          containerStyle={{backgroundColor: '#303030'}}
          colorText='#eee' />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececed'
  }
})
