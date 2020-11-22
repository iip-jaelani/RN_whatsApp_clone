/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Animated, Dimensions, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import connect from 'react-redux/lib/connect/connect';

import {LIGHT_THEME} from '../styles/colors';
const {width, height} = Dimensions.get('window');

//
const PADDING = width * 0.03;
//
const Label = ({theme}) => (
  <Text
    style={{
      color: theme.WHITE_COLOR,
      fontWeight: 'bold',
      fontSize: width * 0.045,
    }}>
    WhatsApp
  </Text>
);

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollY = new Animated.Value(0);
  }
  render() {
    const theme = LIGHT_THEME;
    // const value = 0;
    // console.log(value);
    // this.scrollY.setValue(value);
    // const translateY = this.scrollY.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, -60],
    // });
    return (
      <Animated.View style={{}}>
        <View
          style={{
            padding: PADDING,
            paddingRight: 0,
            backgroundColor: theme.PRIMARY_DOFF_COLOR,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Label theme={theme} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              type="clear"
              buttonStyle={{
                backgroundColor: theme.PRIMARY_DOFF_COLOR,
                marginLeft: width * 0.02,
              }}
              icon={() => (
                <MaterialIcons
                  name="search"
                  color={theme.WHITE_COLOR}
                  size={23}
                />
              )}
            />
            <Button
              type="clear"
              buttonStyle={{
                backgroundColor: theme.PRIMARY_DOFF_COLOR,
                marginLeft: width * 0.02,
              }}
              icon={() => (
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color={theme.WHITE_COLOR}
                  size={23}
                />
              )}
            />
          </View>
        </View>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Animation: state.Animations,
  };
};

export default connect(mapStateToProps, null)(Header);
