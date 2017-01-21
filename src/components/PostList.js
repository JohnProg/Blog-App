import React, { Component } from 'react';

import { ListView, StyleSheet } from 'react-native';

import PostItem from './PostItem'

const PostList = ({items}) => {
   renderRow = (item, sId, rId) => {
     return (
       <PostItem item={item} key={rId} />
     );
   };

   return (
     <ListView dataSource={ items }
       style={styles.listView}
       renderRow={this.renderRow} />
   )
 }

 const styles = StyleSheet.create({
   listView: {
     paddingTop: 70
   }
 });

 export default PostList;
