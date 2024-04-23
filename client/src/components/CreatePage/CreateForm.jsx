import React, {Fragment, useRef} from 'react';
import {isEmpty} from "../../Helper/ValidationHelper.js";
import toast from "react-hot-toast";
import {Create} from "../../APIServices/CRUDServices.js";
import FullScreenLoader from "../Common/FullScreenLoader.jsx";
import { useNavigate } from 'react-router-dom';


const CreateForm = () => {
    const navigate = useNavigate();

    let FoodName, FoodCode, FoodImage, FoodCategory, QTY, Price, Loader = useRef()

    const SaveData =()=> {
        let Food_Name = FoodName.value;
        let Food_Code = FoodCode.value;
        let Food_Image = FoodImage.value;
        let Food_Category = FoodCategory.value;
        let Food_QTY = QTY.value;
        let Food_Price = Price.value;

        if (isEmpty(Food_Name)) {
            toast.error("Food_Name Required",)
        } else if (isEmpty(Food_Code)) {
            toast.error("Food_Code Required")
        } else if (isEmpty(Food_Image)) {
            toast.error("Food_Image Required")
        } else if (isEmpty(Food_Category)) {
            toast.error("Food_Category Required")
        } else if (isEmpty(Food_QTY)) {
            toast.error("Food_QTY Required")
        } else if (isEmpty(Food_Price)) {
            toast.error("Food_Price Required")
        } else {
            Loader.classList.remove("d-none")
            Create(Food_Name, Food_Code, Food_Image, Food_Category, Food_QTY, Food_Price)
                .then((Result) => {
                    Loader.classList.add("d-none")
                    if (Result === true) {
                        toast.success("Data Save Success")
                        FoodName.value = "";
                        FoodCode.value = "";
                        FoodImage.value = "";
                        FoodCategory.value = "";
                        QTY.value = "";
                        Price.value = "";
                        navigate("/")
                    } else {
                        toast.error("Request Fail Try Again")
                    }
                })
        }
    }
    return (
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label>FoodName</label>
                    <input ref={(input)=>FoodName=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>FoodCode</label>
                    <input ref={(input)=>FoodCode=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>FoodImage</label>
                    <input ref={(input)=>FoodImage=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>FoodCategory</label>
                    <input ref={(input)=>FoodCategory=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>QTY</label>
                    <input ref={(input)=>QTY=input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Price</label>
                    <input ref={(input)=>Price=input} type="text" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mt-4">
                    <button onClick={SaveData} className="btn btn-primary w-25">Submit</button>
                </div>
            </div>
        </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>
        </Fragment>
    );
};

export default CreateForm;