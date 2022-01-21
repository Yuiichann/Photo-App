import { createSlice } from '@reduxjs/toolkit';

const photoSaveLocal = JSON.parse(localStorage.getItem('photos')) ?? []

const handleSavePhoto = (data) => {
    localStorage.setItem('photos', JSON.stringify(data))
}

const photo = createSlice({
    name: 'photos',
    initialState: photoSaveLocal,
    reducers: {
        addPhoto: (state, action) => {
            const newState = [...state]
            newState.push(action.payload)
            handleSavePhoto(newState);
            state.push(action.payload); //dont use return
        }
    }
});

const { reducer, actions }  = photo;
export const { addPhoto } = actions;
export default reducer;
