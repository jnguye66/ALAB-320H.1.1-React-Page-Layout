import '../styles/employeeInfo.css'

function EmployeeInfo ({title, info}) {
    return(
        <div id='info'>
            <h3 className='infoTitle'>{title}</h3>
            <h4 className='infoInfo'>{info}</h4>
        </div>
    );
}

export default EmployeeInfo