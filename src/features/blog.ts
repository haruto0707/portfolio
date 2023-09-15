import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchAsyncGetPost = createAsyncThunk(
    'post/get',
    async (id) => {
        const response = await axios.get(`${apiBaseUrl}/posts/${id}`);
        return response.data;
    }
);

export const fetchAsyncGetPosts = createAsyncThunk(
    'posts/list',
    async () => {
        const response = await axios.get(`${apiBaseUrl}/posts`);
        return response.data;
    }
);

export const fetchAsyncCreatePost = createAsyncThunk(
    'post/create',
    async (inputpost) => {
        const response = await axios.post(`${apiBaseUrl}/posts/`, inputpost, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
);

export const fetchAsyncUpdatePost = createAsyncThunk(
    'post/update',
    async (inputpost) => {
        const response = await axios.put(`${apiBaseUrl}/posts/${inputpost.id}`, inputpost, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
);

export const fetchAsyncDeletePost = createAsyncThunk(
    'post/delete',
    async (id) => {
        await axios.delete(`${apiBaseUrl}/posts/${id}`);
        return id;
    }
);

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        currentPost: {
            id: null,
            title: '',
            content: '',
            author: '',
            date: '',
            tags: [],
            posturl: '',
            imageurl: ''
        },
        posts: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGetPost.fulfilled, (state, action) => {
            state.currentPost = action.payload;
        });
        builder.addCase(fetchAsyncGetPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
        builder.addCase(fetchAsyncCreatePost.fulfilled, (state, action) => {
            state.posts.push(action.payload);
        });
        builder.addCase(fetchAsyncUpdatePost.fulfilled, (state, action) => {
            const index = state.posts.findIndex((post) => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        });
        builder.addCase(fetchAsyncDeletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        });
    }
});

export const selectPost = (state) => state.blog.currentPost;

export const selectPosts = (state) => state.blog.posts;

export default blogSlice.reducer;
