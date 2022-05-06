import { Link } from "react-router-dom";

export const Nvabar=()=>{
    const nav=[
        {title:"Women Page",to:"/women"},
        {title:"Cart", to:"/cart"},
    ];
    return(
        <div>
            {
                nav.map((e,i)=>(
                    <Link key={i} to={e.to} style={{margin:"5px"}}>{e.title}</Link>
                ))
            }
        </div>
    )
}