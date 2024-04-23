import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices.js";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from "../Common/FullScreenLoader.jsx";


const ListTable = () => {

    let [DataList, SetDataList] = useState([])
    let navigate = useNavigate();

    useEffect(()=>{
        Read()
            .then((Result)=>{
                SetDataList(Result)
            })
    },[])

    //  Delete
    const DeleteItem = (id) => {
        Delete(id)
            .then((result) => {
                if (result === true) {
                    toast.success("Delete Success");
                    const updatedDataList = DataList.filter(item => item._id !== id);
                    SetDataList(updatedDataList);
                } else {
                    toast.error("Request Fail Try Again");
                }
            })
    }


    // Update

    const UpdateItem=(id)=>{
        navigate(`/update/${id}`);

    }


    if (DataList.length>0){
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>FoodName</th>
                        <th>FoodCode</th>
                        <th>FoodImage</th>
                        <th>FoodCategory</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        DataList.map((item, index)=> {
                            return (
                                <tr>
                                    <td>{item.FoodName}</td>
                                    <td>{item.FoodCode}</td>
                                    <td><img className="list-img" src={item.FoodImage}/></td>
                                    <td>{item.FoodCategory}</td>
                                    <td>{item.QTY}</td>
                                    <td>{item.Price}</td>
                                    <td>
                                        <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-success mx-1">Edit</button>
                                        <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger mx-1">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div className="loader">
                <FullScreenLoader/>
            </div>
        )
    }


};

export default ListTable;