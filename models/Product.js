import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        productCode:{
            type: String,
        },
        imgUrl:{
            type: String,
        },
        brand: {
            type: String
        },
        material: {
            type: String
        },
        description: {
            type: String,
            maxlength: 60
        },
        arrivalDate: {
            type: String
        },
        vendor: {
            type: String
        },
        costPrice: {
            type: String
        },
        salePrice: {
            type: String
        },
        soldPrice: {
            type: String
        },
        customerName:{
            type: String
        },
        customerContact:{
            type: String
        },
        dateSold:{
            type: String
        },
        status:{
            type: String
        },
        amountPaid:{
            type: String
        },
        dues:{
            type: String
        }
    }, {timestamps: true}
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)