import {useParams} from "react-router-dom";

const SingleUser = ()=>{
    const {id} = useParams();
    return(
        <div>
            {id}
        </div>
    );
}
export {SingleUser}