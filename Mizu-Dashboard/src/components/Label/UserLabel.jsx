import '../../assets/css/Label.css'

const UserLabel = ({title, user}) => {
    console.log(user);
    return (
        <div className="label_user">
            <h4 className="title">Último {title}</h4>
            <div className="user_detail">
                <div className="user_detail__image">
                    <img src={user ? "http://localhost:3000/" + user.imagen : ""}></img>
                </div>
                <div className="user_detail__data">
                    <span>Usuario: {user ? user.user_name : ""}</span>
                    <br></br>
                    <span>Nombre: {user ? user.first_name : ""}</span>
                    <br></br>
                    <span>Apellido: {user ? user.last_name : ""}</span>
                    <br></br>
                    <span>E-mail: {user ? user.email : ""}</span>
                </div>
            </div>
        </div>
    )

}

export default UserLabel