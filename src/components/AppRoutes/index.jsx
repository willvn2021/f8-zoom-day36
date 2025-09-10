// import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HashRouter, Router, Routes, Route } from "react-router";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import NotFound from "../../pages/NotFound";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";
import PostDetail from "../../pages/PostDetail";

// Components
import ScrollToTop from "../../components/ScrollToTop";

function AppRoutes() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/PostDetail/:id" element={<PostDetail />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<h1>Dashboard Page</h1>} />
                    <Route
                        path="users"
                        element={<h1>Users Management Page</h1>}
                    />
                    <Route path="settings" element={<h1>Settings Page</h1>} />
                </Route>

                {/* NotFound Route - No Layout */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
