import { useNavigate } from "react-router-dom";

function TopBar() {

    const navigate = useNavigate();

const handleAddCon = ()=>{
    navigate("/add");
}

    return (
        <div className="topBar">
            <div className="navbar bg-base-100 flex justify-center bg-black">
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-2xl">CONTACT DETAILS</a>
                </div>
                <div className="addBtn" style={{}}>
                <button className="btn btn-primary" onClick={handleAddCon}>ADD CONTACT</button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;