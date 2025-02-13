import { api } from "../services/jsonPlaceholder.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useCreatePost = () => {
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
      await api.createPost({
        ...formData,
        userId: 1,
      });
      navigate("/posts");
    } catch (err: unknown) {
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
