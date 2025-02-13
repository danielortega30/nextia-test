import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import { Provider } from "react-redux";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/posts/create" element={<CreatePost />} />
              <Route path="/posts/:id/edit" element={<EditPost />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
