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
            return newState
            // state.push(action.payload); //dont use return
        },
        removePhoto: (state, action) => {
            const removeName = action.payload
            state = state.filter(photo => photo.title !== removeName)
            return state;
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id)

            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
            }
        }
    }
});

const { reducer, actions }  = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
