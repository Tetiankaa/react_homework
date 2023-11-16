import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: [],
    charactersIds: null,
    errors: null,
    isLoading: null
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids);
            return  data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setCharactersIds: (state, action) => {
            state.charactersIds = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload;
                state.errors = null;
                state.isLoading = null;
            })
            .addCase(getAll.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = null;
            })
})

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {...actions, getAll};

export {
    characterReducer,
    characterActions
}