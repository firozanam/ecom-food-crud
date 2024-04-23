import axios from "axios";


// Create Product

export function Create(FoodName, FoodCode, FoodImage, FoodCategory, QTY, Price){
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
        FoodName : FoodName,
        FoodCode : FoodCode,
        FoodImage : FoodImage,
        FoodCategory : FoodCategory,
        QTY : QTY,
        Price : Price
    }
    return axios.post(URL, PostBody)
        .then((res)=>{
            if(res.status===200){
                return true
            }
            else {
                return false
            }
        })
        .catch((err)=>{
            return false
        })
}



// Read Product

export function Read(){
    let URL = "/api/v1/ReadProduct";
    return axios.get(URL)
        .then((res)=>{
            if (res.status===200){
                return res.data["data"];
            }
            else {
                return false
            }
        })
        .catch((err)=>{
            console.log(err)
            return false
        })
}

// Product Read by id

export function ReadById(id){
    let URL = "/api/v1/ReadProductById/"+id;
    return axios.get(URL)
        .then((res)=>{
            if (res.status===200){
                return res.data["data"];
            }
            else {
                return false
            }
        })
        .catch((err)=>{
            console.log(err)
            return false
        })
}






//Update

export function Update(id, FoodName, FoodCode, FoodImage, FoodCategory, QTY, Price){
    let URL = "/api/v1/UpdateProduct/"+id;
    let PostBody = {
        FoodName : FoodName,
        FoodCode : FoodCode,
        FoodImage : FoodImage,
        FoodCategory : FoodCategory,
        QTY : QTY,
        Price : Price
    }
     return axios.post(URL, PostBody)
        .then((res)=>{
            if (res.status===200){
                return true
            }
            else {
                return false
            }
        })
        .catch((err)=>{
            console.log(err)
            return false
        })
}


// Delete

export function Delete(id){
    let URL = "/api/v1/DeleteProduct/"+id;
    return axios.get(URL)
        .then((res)=>{
            if (res.status===200){
                return true
            }
            else {
                return false
            }
        })
        .catch((err)=>{
            console.log(err)
            return false
        })
}

