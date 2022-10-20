
import mongoose from "mongoose"




const dataSchema=new mongoose.Schema({
    TotalPharmacists:{type:String,required:false},
    BussinessType:{type:String,required:false},
    name:{type:String,required:false},
    MobileNumber:{type:Number,required:false},
    email:{type:String,required:false},
    TotalStaffs:{type:String,required:false},
    TotalPharma:{type:String,required:false},
    SizeOfPharmacy:{type:String,required:false},
    PharmacyName:{type:String,required:false},
    Discounts_on_health:{type:String,required:false},
    Discounts_on_meds:{type:String,required:false},
    Pincode:{type:Number,required:false},
    Gst:{type:Number,required:false},
    Address:{type:String,required:false},
    DoYouOwn:{type:String,required:false},
    HaveWholeSaleLicense:{type:String,required:false},
    BillingSoftware:{type:String,required:false},
    DeliveryOption:{type:String,required:false},
    Company:{type:String,required:false},
    City_town:{type:String,required:false},
    License:{type:Number,required:false},
    OnlinePlatforms:{type:String,required:false},
    
   
})
const Data=mongoose.model("data",dataSchema);

export default Data