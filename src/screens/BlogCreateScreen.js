import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from './../context/BlogContext';

const BlogCreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const { addBlogPost } = useContext(Context);
  return (
    <>
      <View style={styles.rowLableTextInput}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          placeholder='Title'
          onChangeText={(newTitle) => {
            setTitle(newTitle);
          }}
        />
      </View>
      <View style={styles.rowLableTextInput}>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          style={styles.textInput}
          value={content}
          placeholder='Content'
          onChangeText={(newContent) => {
            setContent(newContent);
          }}
        />
      </View>
      <Button
        style={styles.button}
        title='Save'
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('BlogList');
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  rowLableTextInput: {
    flexDirection: 'row',
    // alignContent: 'center',
    // justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 15,
    marginTop: 15,
    borderColor: 'green',
    borderWidth: 1,
  },
  label: {
    fontSize: 15,
  },
  textInput: {
    marginHorizontal: 10,
    fontSize: 15,
    backgroundColor: 'gray',
    flex: 1,
  },
  button: {
    marginTop: 30,
  },
});

export default BlogCreateScreen;
