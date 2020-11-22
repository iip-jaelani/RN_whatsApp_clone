/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {LIGHT_THEME} from '../styles/colors';

interface P {
  data: Object;
}
const {width} = Dimensions.get('window');

const Avatar = () => (
  <View
    style={{
      width: width * 0.12,
      height: width * 0.12,
      backgroundColor: '#aaa',
      borderRadius: 100,
      marginRight: width * 0.02,
      overflow: 'hidden',
    }}>
    <Image
      source={require('../assets/images/no_profile.jpg')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
      }}
    />
  </View>
);
const Message = ({data}) => (
  <View
    style={{
      flex: 1,
    }}>
    <Text
      numberOfLines={1}
      style={{
        fontWeight: 'bold',
        fontSize: width * 0.035,
      }}>
      {data.name}
    </Text>
    <Text
      numberOfLines={1}
      style={{
        fontSize: width * 0.033,
        color: '#888',
      }}>
      {data.message}
    </Text>
  </View>
);

export class ChatList extends PureComponent<P> {
  render() {
    const {data} = this.props;
    const theme = LIGHT_THEME;
    //   date: '17.00';
    //   message: 'Aliquip reprehenderit quis dolor minim elit nostrud incididunt aliqua sunt.';
    //   name: 'Mr.Mister';
    //   read: true;
    //   unread_list: 0;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: width * 0.02,
          flex: 1,
          justifyContent: 'space-between',
          marginHorizontal: width * 0.02,
        }}>
        {/* / */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Avatar />
          <Message data={data} />
        </View>
        {/* / */}
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: !data.read ? theme.GREEN_COLOR : '#888',
            }}>
            {data.date}
          </Text>
          {!data.read && (
            <View
              style={{
                backgroundColor: theme.GREEN_COLOR,
                borderRadius: 100,
                minWidth: 20,
                minHeight: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>{data.unread_list}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default ChatList;
