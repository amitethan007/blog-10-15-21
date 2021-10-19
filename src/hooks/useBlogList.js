import { useState, useEffect } from 'react';
import post from '../apis/post';
function useBlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await post.get('/posts', {
        params: {
          limit: 5,
        },
      });

      // console.log(response);
      setPosts(response.data);
    } catch (error) {
      console.log(`Something went wrong | ${error}`);
    }
  };
  return posts;
}

export default useBlogList;
