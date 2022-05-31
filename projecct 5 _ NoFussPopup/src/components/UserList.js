import "./UserList.css";

const UserList = (props) => {

    if (props.userList.length < 1) {
        return <div></div>;
    }
    return (
        <div id="displaySection">
            <ul>
                {props.userList.map(item => (
                    <li key={item.id} id={item.id}>
                        {item.userName} ({item.age} years old)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;