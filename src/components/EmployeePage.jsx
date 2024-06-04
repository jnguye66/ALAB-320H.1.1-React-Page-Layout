import Header from "./Header.jsx"
import EmployeeListItem from "./EmployeeListItem.jsx"
import EmployeeInfo from "./EmployeeInfo.jsx"

import '../styles/employeeInfo.css'

function EmployeePage () {
    return(
        <>
            <Header title='Employee Page' />
            <EmployeeListItem />
            <EmployeeInfo title='Call Office' info='888-888-8888'/>
            <EmployeeInfo title='Call Mobile' info='777-777-7777'/>
            <EmployeeInfo title='SMS' info='777-777-7777'/>
            <EmployeeInfo title='Email' info='leeroooyjeeenkinsss@wow.com'/>
        </>
    )
}

export default EmployeePage