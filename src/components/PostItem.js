import React, { Component } from 'react';

import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const PostItem = ({item}) => {
  return (
    <View style={styles.row}>
      <Image source={{uri: item.imageUrl, height: 150}} style={styles.image}/>
      <Text style={styles.title}>
        { item.title }
      </Text>
      <Text style={styles.description}>
        { item.description.length < 85 ? item.description : `${item.description.slice(0, 85)}...`}
      </Text>
      <View style={styles.referenceContainer}>
        <View style={styles.countsContainer}>
          <View>
            <Text>{ item.comments }</Text>
          </View>
          <View>
            <Text>{ item.likes }</Text>
          </View>
        </View>
        <View style={styles.speakerContainer}>
          <Text style={styles.speakerText}>By { item.speaker }</Text>
        </View>
      </View>
    </View>
  )
 }

 const styles = StyleSheet.create({
   image: {
     flex: 1,
     resizeMode: 'cover',
     borderTopLeftRadius: 3,
     borderTopRightRadius: 3,
   },
   title: {
     margin: 15,
     marginBottom: 0,
     fontSize: 17,
     fontWeight: '500'
   },
   description: {
     margin: 15,
     marginTop: 7,
     textAlign: 'justify',
     color: '#aaa'
   },
   row: {
     margin: 15,
     borderRadius: 3,
     backgroundColor: '#fff',
     shadowColor: '#303030',
     shadowOffset: {
       width: 0,
       height: 2
     },
     shadowOpacity: 0.1
   },
   referenceContainer: {
     flexDirection: 'row',
     borderTopColor: '#eaeaea',
     borderTopWidth: 1,
     padding: 15
   },
   countsContainer: {
     flex: 0.4,
     flexDirection: 'row',
     justifyContent: 'space-around'
   },
   speakerContainer: {
     flex: 0.6,
     alignItems: 'flex-end',
   },
   speakerText : {
     fontStyle: 'italic',
     color: '#aaa'
   }
 });

 export default PostItem;
