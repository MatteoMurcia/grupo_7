import './Label.css'
const Label = ({title, value, description}) => {

    return (
        <div className="label">
            {/* icon */}
            <h4 className="title">Total de {title}</h4>
            <div className="value">{value}</div>
        </div>
    )

}

export default Label