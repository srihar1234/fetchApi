/* eslint-disable react/prop-types */
import TopBar from "../Components/TopBar";
import AddForm from "../Components/AddForm";

function AddCard({contact,setContact}){
    return(
        <div className="form">
            <TopBar/>
            <AddForm
              contact={contact}
              setContact={setContact}
            />
        </div>
    )
}

export default AddCard;