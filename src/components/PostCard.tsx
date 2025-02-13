import ArticleIcon from "@mui/icons-material/Article";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Post } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-blue-100 rounded-lg p-2">
          <ArticleIcon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
          <p className="text-gray-600 line-clamp-3">{post.body}</p>
        </div>
      </div>

      <div className="flex gap-3 pt-4 mt-auto border-t border-gray-100">
        <Link
          to={`/posts/${post.id}`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          <VisibilityIcon className="h-4 w-4" />
          <span>View Details</span>
        </Link>
        <Link
          to={`/posts/${post.id}/edit`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
        >
          <EditIcon className="h-4 w-4" />
          <span>Edit</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
