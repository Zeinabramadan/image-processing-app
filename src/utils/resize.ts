import sharp from 'sharp'

const resizeImages = async (
  location: string,
  name: string,
  width: string,
  height: string
) => {
  let resizedImage = null

  try {
    await sharp(location)
      .resize({ width: parseInt(width), height: parseInt(height) })
      .toFile(`./assets/thumbnails/${name}x${width}x${height}.png`)
      .then((data) => {
        resizedImage = data
      })
  } catch (err) {
    console.log(err)
  }
  return resizedImage
}

export default resizeImages
