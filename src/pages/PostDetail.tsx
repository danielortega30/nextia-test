import CommentCard from "../components/CommentCard";
import { useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";

const PostDetail = () => {
  const { id } = useParams();
  const { post, comments, loading, error } = usePostDetail(id!);

  if (loading || !post) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-xl text-gray-600">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-600 text-lg leading-relaxed">{post.body}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
