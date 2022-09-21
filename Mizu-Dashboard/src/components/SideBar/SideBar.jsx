import React from "react";
import '../../assets/css/SideBar.css'
import Logo from '../../assets/images/p-1658118909808.png'

function SideBar() {

    return(
        <ul className="sideBar">
			<a className="control_a" href="/">
				<div className="logo">
					<img src={Logo} alt="Mizu Petshop" />
				</div>
			</a>
			<li className="control_li">
				<a className="control_li__link" href="/">
					<span>Dashboard - Mizu Petshop</span></a>
			</li>
			<li className="control_li">
				<a className="control_li__link" href="/">
					<span>Actividad</span></a>
			</li>
			<li className="control_li">
				<a className="control_li__link" href="/">
					<span>Estadísticas</span></a>
			</li>

			<li className="control_li">
				<a className="control_li__link" href="/">
					<span>Configuración</span></a>
			</li>
		</ul>
    )
}

export default SideBar;