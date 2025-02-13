import { useEffect, useState } from "react";

import { Post } from "../types";
import { api } from "../services/jsonPlaceholder.service";
import { useNavigate } from "react-router-dom";

export const useEditPost = (postId: string) => {
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
        const post = await api.getPost(Number(postId));
        setFormData(post);
      } catch (_: unknown) {
        setError("Error fetching post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.updatePost(Number(postId), formData);
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
