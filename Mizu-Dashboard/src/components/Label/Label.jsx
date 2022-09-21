import '../../assets/css/Label.css'

const Label = ({title, value, }) => {

    return (
        <div className="label">
            <h4 className="title">Total de {title}</h4>
            <span className="value">{value}</span>
        </div>
    )

}

export default Label