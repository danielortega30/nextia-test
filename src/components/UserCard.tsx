import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { User } from "../types";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 rounded-full p-3">
            <PersonIcon className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500">@{user.username}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <EmailIcon className="h-5 w-5 mr-2 text-blue-500" />
            <span className="text-sm">{user.email}</span>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to={`/users/${user.id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <span>View Details</span>
            <ArrowForwardIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
