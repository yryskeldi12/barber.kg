import React from 'react';
import HeaderBlog from "./headerBlog/headerBlog";
import Advice from "./advice/advice";
import AdviceTo from "./agviceTo/adviceTo";
import View from "./view/view";

const Blog = () => {
    return (
        <div id='blog'>
            <HeaderBlog/>
            <Advice/>
            <AdviceTo/>
            <View/>
        </div>
    );
};

export default Blog;