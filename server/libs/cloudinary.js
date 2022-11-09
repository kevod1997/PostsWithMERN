import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: "dgps1ehul",
    api_key:"391464673974139",
    api_secret:"hcHhvjGo6d_c3REAeQpOsKcVx74"
})

export const uploadImage = async filePath =>   {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'test'
    })
}

export const deletedImage = async id => {
    return await cloudinary.uploader.destroy(id)
}