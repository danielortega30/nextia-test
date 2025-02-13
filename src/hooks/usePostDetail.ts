import { Comment, Post } from "../types";
import { useEffect, useState } from "react";

import { api } from "../services/jsonPlaceholder.service";

export const usePostDetail = (postId: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const [postData, commentsData] = await Promise.all([
          api.getPost(Number(postId)),
          api.getPostComments(Number(postId)),
        ]);
        setPost(postData);
        setComments(commentsData);
      } catch (err: unknown) {
        setError("Error fetching post details");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

  return { post, comments, loading, error };
};
