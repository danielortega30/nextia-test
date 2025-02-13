import { Comment } from "../types";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
      <h3 className="font-semibold">{comment.name}</h3>
      <p className="text-sm text-gray-600">{comment.email}</p>
      <p className="mt-2">{comment.body}</p>
    </div>
  );
};

export default CommentCard;
