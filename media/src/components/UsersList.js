import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store";
import Skeleton from "./Skeleton";

function UsersList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users; 
    });

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (isLoading) {
        return <Skeleton times={6} className="h-10 w-full"/>
    }

    if (error) {
        return <div>Error fetching data</div>
    }

    return <div>{data.length}</div>
}

export default UsersList;