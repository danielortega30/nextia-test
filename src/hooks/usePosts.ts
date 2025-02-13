import { setError, setLoading, setPosts } from "../store/slices/postsSlice";

import { api } from "../services/jsonPlaceholder.service";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { useEffect } from "react";

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setLoading(true));
      try {
        const data = await api.getPosts();
        dispatch(setPosts(data));
      } catch (err) {
        dispatch(setError("Error fetching posts"));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (posts.length === 0) {
      fetchPosts();
    }
  }, [dispatch, posts.length]);

  return { posts, loading, error };
};
