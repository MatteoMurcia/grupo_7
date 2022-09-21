import '../../assets/css/Table.css'
const UsersTable = ({columns, users}) => {

    return(
        <div className='table'>
            <div className='columns'>
                {columns.map((column, i) => <span key={column + "" + i}>{column}</span>)}
            </div>
                {users.map((user, i)=>{
                    return(
                        <div key={i} className='rows'>
                            <span>{user.user_id}</span>
                            <span>{user.user_name}</span>
                            <span>{user.first_name}</span>
                            <span>{user.email}</span>
                        </div>
                    )
                })}
        </div>
    )
}


export default UsersTable