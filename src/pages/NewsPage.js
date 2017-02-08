import React, { Component } from 'react';

import { ActivityIndicator, ListView, StyleSheet, Text, View } from 'react-native';

// External Libraries
import Icon from 'react-native-vector-icons/MaterialIcons';

// Components
import NavBar from './../components/navBar';
import PostList from './../components/PostList';

// Utils
import Api from './../utils/Api'

class NewsPage extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      loading: false,
      posts: dataSource
    };
  }

  componentDidMount() {
    this.setState({loading: true});

    Api.getPostList()
    .then(data => {
      const images = [
        "https://images.unsplash.com/photo-1441311956160-78a471e0638d?dpr=2&auto=format&fit=crop&w=500&h=500&q=80&cs=tinysrgb&crop=",
        "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?dpr=2&auto=format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?dpr=2&auto=format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=",
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?dpr=2&auto=format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop="
      ];
      let count = 0;

      for (var i in data) {
        count = count > 3 ? 0 : count;
        data[i]['imageUrl'] = images[count];
        data[i]['speaker'] = 'John Machahuay';
        data[i]['comments'] = 230;
        data[i]['likes'] = 20;
        count++;
      }

      this.setState({
        posts: this.state.posts.cloneWithRows(data),
        loading: false
      });
    });
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <View style={styles.container}>

        { loading ? <ActivityIndicator size={'large'} /> : <PostList items={ posts } navigator={this.props.navigator}/> }

        <NavBar
          title="Inicio"
          leftText={<Icon name="menu" size={20} />}
          rightText={<Icon name="search" size={20} />}
          containerStyle={{backgroundColor: '#303030'}}
          colorText='#eee' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececed',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default NewsPage;
