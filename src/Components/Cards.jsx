import { useEffect, useState } from "react";
import { deleteContact, getAllDoctor } from "../API/helper";
import { useNavigate } from "react-router-dom";

function Cards() {

   const [contact,setContact] = useState();
   const navigate = useNavigate();
   
   useEffect(()=>{
    getAllDoctor().
    then((data)=>{
        setContact(data);
       });
   },[]);

   const deleteCon = (id)=>{
    deleteContact(id).
    then((data)=>{
        if(data){
            const remainingContact = contact.filter((conInfo)=>conInfo.id !=id);
            setContact([...remainingContact]);
        }
        else{
            console.log("error");
        }
    });
   }

   const editCon = (id)=>{
      navigate(`/edit/${id}`);
   }

    return (
         
        <div className="cards">
            {contact && (<>
                { 
                contact.map((conInfo, idx) => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={idx} >
                        <div className="card-body">
                            <h2 className="card-title">NAME : {conInfo.name}</h2>
                            <p>USERNAME : {conInfo.username}</p>
                            <p>EMAIL : {conInfo.email}</p>
                            <p>ADDRESS : {`${conInfo.address.suite},${conInfo.address.street},${conInfo.address.city},${conInfo.address.zipcode}`}</p>
                            <p>PHONE : {conInfo.phone}</p>
                            <p>WEBSITE : {conInfo.website}</p>
                            <p>COMPANY NAME : {conInfo.company.name}</p>
                            <p>COMPANY CATCHPHRASE : {conInfo.company.catchPhrase}</p>
                            <p>COMPANY BS : {conInfo.company.bs}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>editCon(conInfo.id)}>EDIT</button>
                                <button className="btn btn-primary" onClick={()=>deleteCon(conInfo.id)}>DELETE</button>
                            </div>
                        </div>
                    </div>
                ))
            }

            </>)} 
            
        </div>
    )
}

export default Cards;