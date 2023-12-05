import { useNavigate } from "react-router-dom";

function TopBar() {

    const navigate = useNavigate();

const handleAddCon = ()=>{
    navigate("/add");
}
const handleHome = ()=>{
    navigate("/");
}

    return (
        <div className="topBar">
            <div className="navbar bg-base-100 flex justify-between bg-black p-5">
            <button className="btn btn-primary text-xl" onClick={handleHome}>HOME</button>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-2xl">CONTACT DETAILS</a>
                </div>
                <button className="btn btn-primary text-xl" onClick={handleAddCon}>ADD CONTACT</button>
            </div>
        </div>
    )
}

export default TopBar;