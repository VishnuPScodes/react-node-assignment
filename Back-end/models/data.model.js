
import mongoose from "mongoose"




const dataSchema=new mongoose.Schema({
    TotalPharmacists:{type:String,required:true},
    BussinessType:{type:String,required:true},
    name:{type:String,required:true},
    MobileNumber:{type:Number,required:true},
    email:{type:String,required:true},
    TotalStaffs:{type:Number,required:false},
    TotalPharma:{type:Number,required:false},
    SizeOfPharmacy:{type:Number,required:false},
    PharmacyName:{type:String,required:true},
    Discounts_on_health:{type:String,required:true},
    Discounts_on_meds:{type:String,required:true},
    Pincode:{type:Number,required:false},
    Gst:{type:Number,required:false},
    Address:{type:String,required:true},
    DoYouOwn:{type:String,required:true},
    HaveWholeSaleLicense:{type:String,required:true},
    BillingSoftware:{type:String,required:true},
    DeliveryOption:{type:String,required:true},
    Company:{type:String,required:true},
    City_town:{type:String,required:true},
    License:{type:Number,required:false},
    OnlinePlatforms:{type:String,required:false},
    
   
})
const Data=mongoose.model("data",dataSchema);

export default Data