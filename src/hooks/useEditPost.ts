import { useEffect, useState } from "react";

import { api } from "../services/jsonPlaceholder.service";
import { updatePost } from "../store/slices/postsSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { useNavigate } from "react-router-dom";

export const useEditPost = (postId: string) => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) =>
    state.posts.posts.find((p) => p.id === Number(postId))
  );
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Post>({
    id: 0,
    userId: 0,
    title: "",
    body: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = post || (await api.getPost(Number(postId)));
        setFormData(postData);
      } catch (err) {
        setError("Error fetching post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const response = await api.updatePost(Number(postId), formData);
      dispatch(updatePost(response));
      navigate(`/posts/${postId}`);
    } catch (err) {
      setError("Error updating post");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    loading,
    saving,
    error,
    handleSubmit,
    handleChange,
  };
};
