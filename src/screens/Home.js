/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import {LIGHT_THEME} from '../styles/colors';
const {width} = Dimensions.get('window');
let PADDING = width * 0.02;
import chats from '../models/chat_list.json';
import ChatList from '../components/ChatList';
import App from '../../App';
import {connect} from 'react-redux';
import {HeaderAnimated} from '../redux/actions/Animated.actions';

export class Home extends Component {
  // as chat screen
  handleScroll(e) {
    this.props.HeaderAnimated(e.nativeEvent.contentOffset.y);
  }
  render() {
    const theme = LIGHT_THEME;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.WHITE_COLOR,
          // paddingHorizontal: PADDING,
        }}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={this.handleScroll.bind(this)}>
          {chats.data.map((data, i) => (
            <ChatList key={i} data={data} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Animation: state.Animations,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    HeaderAnimated: (e) => {
      dispatch(HeaderAnimated(e));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
