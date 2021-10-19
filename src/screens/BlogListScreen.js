import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
// import useBlogList from '../hooks/useBlogList';

import { Context } from './../context/BlogContext';

const BlogListScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  // const posts = useBlogList();

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <FlatList
        style={styles.flatList}
        data={state}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('BlogView', { id: item.id })}
              >
                <View style={styles.rowTextIcon}>
                  <Text key={item.id} numberOfLines={1} style={styles.blogText}>
                    {item.id}#{item.title} - {item.content}
                  </Text>

                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <AntDesign
                      id={item.id}
                      name='delete'
                      size={24}
                      color='black'
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

BlogListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('BlogCreate')}>
          <AntDesign
            name='addfile'
            size={24}
            color='black'
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  blogText: {
    fontSize: 20,
  },
  flatList: {
    // width: '100%',
  },
  rowTextIcon: {
    // flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderTopWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
export default BlogListScreen;
