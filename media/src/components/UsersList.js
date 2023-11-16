import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store";

function UsersList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    
    return 'Users List';
}

export default UsersList;