import React from 'react';
import UpdateForm from "../components/UpdatePage/UpdateForm.jsx";
import AppNavBar from "../components/Common/AppNavBar.jsx";
import {useParams} from "react-router";
const UpdatePage = () => {
    const params = useParams()

    return (
        <div>
            <AppNavBar/>
            <UpdateForm id={params["id"]}/>
        </div>
    );
};

export default UpdatePage;