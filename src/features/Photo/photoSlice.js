import { createSlice } from '@reduxjs/toolkit';

const photoSaveLocal = JSON.parse(localStorage.getItem('photos-list')) ?? []

const handleSavePhoto = (data) => {
    localStorage.setItem('photos-list', JSON.stringify(data))
}

const photo = createSlice({
    name: 'photos',
    initialState: photoSaveLocal,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload); //dont use return
            handleSavePhoto(state)
        },
        removePhoto: (state, action) => {
            const removeId = action.payload
            state = state.filter(photo => photo.id !== removeId)
            handleSavePhoto(state)
            return state;
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id)

            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
                handleSavePhoto(state)
            }
        },

    }
});

const { reducer, actions }  = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
