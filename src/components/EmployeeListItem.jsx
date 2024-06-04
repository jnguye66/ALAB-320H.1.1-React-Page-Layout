import '../styles/employeeListItem.css'

function EmployeeListItem() {
    const name = "Leeroy Jenkins"
    const title = "World of Warcraft Legend"
    const imgSRC = 'https://warcraft.wiki.gg/images/thumb/7/71/Leeroy_Jenkins_TCG.jpg/800px-Leeroy_Jenkins_TCG.jpg';
    const alt = 'Leeroy Jenkins'

    return (
        <div id='emp-list-item'>
            <img src={imgSRC} alt={alt} style={{float: 'left'}}/>
            <div className='info'>
                <h4>{name}</h4>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default EmployeeListItem