/* eslint-disable react/prop-types */
import TopBar from "../Components/TopBar";
import { useParams } from "react-router-dom";
import EditForm from "../Components/EditingNew"


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

