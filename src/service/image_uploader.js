const url = process.env.REACT_APP_CLOUDINARY_API_URL;

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "z1jz1qvq");

    const result = await fetch(
      url, //
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
