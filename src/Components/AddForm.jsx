/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewContact } from "../API/helper";



function AddForm({contact,setContact}){


    const navigate = useNavigate();

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [street, setStreet] = useState();
    const [suite, setSuite] = useState();
    const [city, setCity] = useState();
    const [zipcode, setZipcode] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [phone, setPhone] = useState();
    const [web, setWeb] = useState();
    const [companyName, setCompanyName] = useState();
    const [comPhrase, setComPhrase] = useState();
    const [comBs, setComBs] = useState();
   

    const handleAdd = ()=>{
        const newContact = {
            name: name,
            username: username,
            email: email,
            address: {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
                geo: {
                    lat: lat,
                    lng: lon,
                },
            },
            phone: phone,
            website: web,
            company: {
                name: companyName,
                catchPhrase: comPhrase,
                bs: comBs,
            },
        };
        addNewContact(newContact).
        then((data)=>{
            if(data){
                setContact([...contact,newContact]);
                navigate("/");
            }
            else{
                console.log("error");
            }
        });    
    }


    return(
        <>
          <div>
            <div className="addForm">

                <input type="text" placeholder="Enter your name"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder="Enter your username"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="text" placeholder="Enter your email"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="text" placeholder="Enter your street"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <input type="text" placeholder="Enter your suite"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={suite}
                    onChange={(e) => setSuite(e.target.value)}
                />
                <input type="text" placeholder="Enter your city"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input type="text" placeholder="Enter your zipcode"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
                <input type="text" placeholder="Enter your latitude"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
                <input type="text" placeholder="Enter your longitude"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={lon}
                    onChange={(e) => setLon(e.target.value)}
                />
                <input type="text" placeholder="Enter your phone"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input type="text" placeholder="Enter your website"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={web}
                    onChange={(e) => setWeb(e.target.value)}
                />
                <input type="text" placeholder="Enter your company name"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <input type="text" placeholder="Enter your company catchphrase"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={comPhrase}
                    onChange={(e) => setComPhrase(e.target.value)}
                />
                <input type="text" placeholder="Enter your company bs"
                    className="input input-bordered input-primary w-full max-w-xl"
                    value={comBs}
                    onChange={(e) => setComBs(e.target.value)}
                />
                <button className="btn btn-secondary" onClick={handleAdd}>ADD CONTACT</button>
            </div>
        </div>
        </>
    )
}

export default AddForm;