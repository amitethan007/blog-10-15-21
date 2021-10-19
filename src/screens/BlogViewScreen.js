import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from './../context/BlogContext';
const BlogViewScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  console.log(blogPost);
  return (
    <View>
      <Text>
        {blogPost.title} - {navigation.getParam('id')}
      </Text>
    </View>
  );
};

export default BlogViewScreen;
