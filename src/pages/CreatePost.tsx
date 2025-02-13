import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useCreatePost } from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { formData, loading, error, handleSubmit, handleChange } =
    useCreatePost();

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <PostAddIcon className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Create New Post</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="body"
            className="block text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/posts")}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200 cursor-pointer flex items-center gap-2"
          >
            <CancelIcon className="h-5 w-5" />
            <span>Cancel</span>
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <AddCircleIcon className="h-5 w-5" />
            <span>{loading ? "Creating..." : "Create Post"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
