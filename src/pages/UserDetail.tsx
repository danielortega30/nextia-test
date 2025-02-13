import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { useUserDetail } from "../hooks/useUserDetail";

const UserDetail = () => {
  const { id } = useParams();
  const { user, posts, loading, error } = useUserDetail(id!);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-xl text-gray-600">Loading...</div>
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
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <PersonIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PersonIcon className="h-5 w-5 text-blue-500" />
              <p className="text-gray-600">@{user.username}</p>
            </div>
            <div className="flex items-center gap-3">
              <EmailIcon className="h-5 w-5 text-blue-500" />
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-blue-500" />
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <LanguageIcon className="h-5 w-5 text-blue-500" />
              <p className="text-gray-600">{user.website}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">User Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
