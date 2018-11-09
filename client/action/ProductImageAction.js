import dotenv from "dotenv";
import axios from "axios";
import {
  UPLOAD_PHOTO_FAILED,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS
} from "./types";

dotenv.config();

const uploadPhotoRequest = newstate => ({
  type: UPLOAD_PHOTO_REQUEST,
  newstate
});

const uploadPhotoSuccess = url => ({
  type: UPLOAD_PHOTO_SUCCESS,
  url
});

const uploadPhotoFailed = error => ({
  type: UPLOAD_PHOTO_FAILED,
  error
});

export const uploadPhoto = file => {
  return dispatch => {
    dispatch(uploadPhotoRequest(true));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pxph4epr");

    return axios({
      method: "POST",
      url: "https://api.cloudinary.com/v1_1/djpmqzmio/image/upload",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(response => {
        const { url } = response.data;
        dispatch(uploadPhotoSuccess(url));
        dispatch(uploadPhotoRequest(false));
      })
      .catch(() => {
        dispatch(
          uploadPhotoFailed("Photo upload failed. Please try again later")
        );
        dispatch(uploadPhotoRequest(false));
      });
  };
};
