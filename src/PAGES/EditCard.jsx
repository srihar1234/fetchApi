/* eslint-disable react/prop-types */
import TopBar from "../Components/TopBar";
import EditForm from "../Components/editForm";
import { useParams } from "react-router-dom";


export default function EditCard({contact,setContact}){

    const { id } = useParams();
    
    return(
        <div className="form">
            <TopBar/>
            <EditForm
            contact={contact}
            setContact={setContact}
            id={id}
            />
        </div>
    )
}