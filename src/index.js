import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AdminHomepage from './pages/admin/homepage/adminHomepage';
import { AHProps } from './pages/admin/homepage/AHProps';
import AllProjectsAdmin from './pages/admin/projects/all/adminAllProjects';
import { AAPProps } from './pages/admin/projects/all/AAPProps';
import AdminAllUsers from './pages/admin/users/all/adminAllUsers';
import { AAUProps } from './pages/admin/users/all/AAUProps';
import AdminUploadProject from './pages/admin/projects/specific/adminUploadProject';
import { AUPProps } from './pages/admin/projects/specific/AUPProps';
import AdminAllBlogs from './pages/admin/blogs/all/adminAllBlogs';
import { AABProps } from './pages/admin/blogs/all/AABProps';
import AdminUploadBlog from './pages/admin/blogs/specific/adminUploadBlog';
import { AUBProps } from './pages/admin/blogs/specific/AUBProps';
import AdminUsersLogin from './pages/admin/users/actions/login/adminUsersLogin';
import { AULProps } from './pages/admin/users/actions/login/AULProps';
import AdminUsersSignup from './pages/admin/users/actions/signup/adminUsersSignup';
import { AUSProps } from './pages/admin/users/actions/signup/AUSProps';
import Home from './pages/public/homepage/homepage';
import { HProps } from './pages/public/homepage/HProps';
import About from './pages/public/about/about';
import { AProps } from './pages/public/about/AProps';
import PastProjects from './pages/public/projects/allProjects';
import { APProps } from './pages/public/projects/APProps';
import Blog from './pages/public/blog/all/blog';
import { BAProps } from './pages/public/blog/all/BAProps';
import SpecificBlogPost from './pages/public/blog/specific/blogPost';
import { BPProps } from './pages/public/blog/specific/BPProps';
import PageNotFound from './pages/public/404/404Page';
import { UKNProps } from './pages/public/404/404Props';
import AdminUserHome from './pages/admin/users/home/adminUsersHome';
import VerifyEmail from './pages/admin/users/actions/verifyEmail/verifyEmail';
import { AUVEProps } from './pages/admin/users/actions/verifyEmail/AUVEProps';
import { AUHProps } from './pages/admin/users/home/AUHProps';
import ContactPage from './pages/public/contact/contact';
import { CProps } from './pages/public/contact/CProps';
import UserUpdateUser from './pages/admin/users/updateUser/userUpdateUser';
import { UUUProps } from './pages/admin/users/updateUser/UUUProps';
import SpecificBlogPostWithURL from './pages/public/blog/specificTitleURL/blogPostURL';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home props={HProps} />} />
      <Route path="/about" element={<About props={AProps} />} />
      <Route path="/projects" element={<PastProjects props={APProps} />} />
      <Route path="/contact" element={<ContactPage props={CProps} />} />
      <Route path="/blogs" element={<Blog props={BAProps} />} />
      <Route path="/blogs/:blog_id" element={<SpecificBlogPost props={BPProps} />} />
      <Route path="/blogs/:blog_id/:title" element={<SpecificBlogPostWithURL props={BPProps} />} />
      <Route path="/users/login" element={<AdminUsersLogin props={AULProps}/>} />
      <Route path="/users/signup" element={<AdminUsersSignup props={AUSProps}/>} />
      <Route path="/users/home" element={<AdminUserHome props={AUHProps}/>} />
      <Route path="/users/user/:email" element={<UserUpdateUser props={UUUProps}/>} />
      <Route path="/users/verify/:jwt" element={<VerifyEmail props={AUVEProps}/>} />
      <Route path="/admin/home" element={<AdminHomepage props={AHProps}/>} />
      <Route path="/admin/projects/all" element={<AllProjectsAdmin props={AAPProps}/>}/>
      <Route path="/admin/projects/create" element={<AdminUploadProject props={AUPProps}/>}/>
      <Route path="/admin/projects/:project_id/edit" element={<AdminUploadProject props={AUPProps}/>}/>
      <Route path="/admin/blogs/all" element={<AdminAllBlogs props={AABProps}/>}/>
      <Route path="/admin/blogs/create" element={<AdminUploadBlog props={AUBProps}/>}/>
      <Route path="/admin/blogs/:project_id/edit" element={<AdminUploadBlog props={AUBProps}/>}/>
      <Route path="/admin/users/all" element={<AdminAllUsers props={AAUProps}/>}/>
      <Route path='*' element={<PageNotFound props={UKNProps}/>}/>
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
