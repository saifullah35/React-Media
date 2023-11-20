import { GoTrashCan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

function UsersListItem({ user }) {
    const [ doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    return (
            <div className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-cenetr cursor-pointer">
                    <Button loading={isLoading} onClick={handleClick}>
                        <GoTrashCan />
                    </Button>
                    {error && <div> Error deleting user. </div>}
                    {user.name}
                </div>
            </div>
        );
}

export default UsersListItem;