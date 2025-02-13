import { Post, User } from "../types";
import { useEffect, useState } from "react";

import { api } from "../services/jsonPlaceholder.service";

export const useUserDetail = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const [userData, postsData] = await Promise.all([
          api.getUser(Number(userId)),
          api.getUserPosts(Number(userId)),
        ]);
        setUser(userData);
        setPosts(postsData);
      } catch (err: unknown) {
        setError("Error fetching user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return { user, posts, loading, error };
};
