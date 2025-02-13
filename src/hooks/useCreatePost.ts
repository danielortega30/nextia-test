import { addPost } from "../store/slices/postsSlice";
import { api } from "../services/jsonPlaceholder.service";
import { useAppDispatch } from "./useAppDispatch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useCreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.createPost({
        ...formData,
        userId: 1,
      });
      dispatch(addPost(response));
      navigate("/posts");
    } catch (err) {
      setError("Error creating post");
    } finally {
      setLoading(false);
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
    error,
    handleSubmit,
    handleChange,
  };
};
