import './Label.css'
const Label = ({title, value, description}) => {

    return (
        <div className="label">
            {/* icon */}
            <p className="title">Total de {title}</p>
            <h3 className="value">{value}</h3>
        </div>
    )

}

export default Label