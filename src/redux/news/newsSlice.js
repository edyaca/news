import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Request from "../../services/request";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        latestNews: {}
    },
    reducers: {
        clearLatestNews: (state) => {
            state.latestNews = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLatestNews.fulfilled, (state, action) => {
                state.latestNews = action.payload
            })
    }
})

export const getLatestNews = createAsyncThunk(
    'getLatestNews',
    async () => {
        console.log('lalo 3')
        const response = await Request.getEncoded('everything?q=bitcoin')
        if (response) {
            return response ?? {}
        } else {
            throw 'Error fetch'
        }
    }
)

export const { clearLatestNews } = newsSlice.actions
export default newsSlice.reducer