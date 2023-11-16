import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store";

function UsersList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users; 
    });

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching data</div>
    }

    return <div>{data.length}</div>
}

export default UsersList;