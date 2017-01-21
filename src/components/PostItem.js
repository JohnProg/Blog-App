import React, { Component } from 'react';

import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// External Libraries
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const PostItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.row}
                      activeOpacity={0.6}
                      onPress={ ()=> alert(item.title) }>
      <Image source={{uri: item.imageUrl, height: 150}}
             style={styles.image}/>

      <Text style={styles.title}>
        { item.title }
      </Text>

      <Text style={styles.description}>
        { item.body.length < 80 ? item.body : `${item.body.slice(0, 80)}...`}
      </Text>

      <View style={styles.referenceContainer}>
        <View style={styles.countsContainer}>
          <View style={styles.horizontal}>
            <View style={styles.iconCountContainer}>
              <Icon name="comment" size={14} />
            </View>
            <Text style={styles.countText}>{ item.comments }</Text>
          </View>
          <TouchableOpacity style={styles.horizontal}
                            onPress={ ()=> alert('I like it!') }>
            <View style={styles.iconCountContainer}>
              <Icon name={ item.liked ? 'favorite-border' : 'favorite' } size={14} />
            </View>
            <Text style={styles.countText}>{ item.likes }</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.speakerContainer}>
          <Text style={styles.speakerText}>By { item.speaker }</Text>
        </View>
      </View>

    </TouchableOpacity>
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
     justifyContent: 'space-between',
   },
   speakerContainer: {
     flex: 0.6,
     alignItems: 'flex-end',
   },
   speakerText : {
     fontStyle: 'italic',
     color: '#aaa',
     marginTop: 5
   },
   horizontal: {
     flexDirection: 'row',
   },
   iconCountContainer: {
     marginRight: 5,
     borderRadius: 15,
     height: 30,
     width: 30,
     padding: 6.2,
     borderColor: '#d6d6d6',
     borderWidth: 2,
   },
   countText: {
     marginTop: 5
   }
 });

 export default PostItem;
