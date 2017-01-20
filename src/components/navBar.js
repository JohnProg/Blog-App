'use strict'

import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    top: 0,
    width: width,
    backgroundColor: '#fff',
    shadowColor: '#e3e3e3',
    shadowOpacity: 0.9
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitleText: {
    fontWeight: '500',
  },
  navBarButton: {
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
  }
});

const navBar = ({leftText, onLeftPress, onRightPress, rightText, title, colorText, containerStyle}) =>
  <View style={[styles.navBarContainer, containerStyle]}>
      <View style={styles.statusBar}>
        <StatusBar
            translucent={true}
            backgroundColor={'#rgba(0, 0, 0, 0.2)'}
            barStyle="light-content"
            showHideTransition='slide'
            style={styles.statusBar}
            hidden={ false }
        />
      </View>

      <View style={styles.navBar}>
          {
            leftText ? <TouchableOpacity
                        onPress={onLeftPress}
                        style={styles.navBarButton}>
                        <Text style={{color: colorText}}>{leftText}</Text>
                        </TouchableOpacity>
                    : null
          }

          <View
              style={styles.navBarTitleContainer}>
              <Text style={[styles.navBarTitleText, {color: colorText}]}>{ title || 'Blog App' }</Text>
          </View>

          {
            rightText ? <TouchableOpacity
                        onPress={onRightPress}
                        style={styles.navBarButton}>
                        <Text style={{color: colorText}}>{rightText}</Text>
                        </TouchableOpacity>
                    : null
          }
      </View>
  </View>

export default navBar;
