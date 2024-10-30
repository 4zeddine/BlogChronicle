import axios from "axios";

export const uploadImage = async (img) => {
  let imgUrl = null;
  const formData = new FormData();
  formData.append("image", img);

  const response = await axios.post(
    import.meta.env.VITE_SERVER_DOMAIN + "/upload-image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  imgUrl = response.data.url;
  return imgUrl;
};
