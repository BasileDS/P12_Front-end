$(function() {  
    // const employees = JSON.parse(localStorage.getItem('employees'));

    let employees = {};

    fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        employees = data;
        console.log(employees);

        $('#employee-table').DataTable({
            data: employees,
            columns: [
                { title: 'First Name', data: 'firstName' },
                { title: 'Last Name', data: 'lastName' },
                { title: 'Start Date', data: 'startDate' },
                { title: 'Department', data: 'department' },
                { title: 'Date of Birth', data: 'dateOfBirth' },
                { title: 'Street', data: 'street' },
                { title: 'City', data: 'city' },
                { title: 'State', data: 'state' },
                { title: 'Zip Code', data: 'zipCode' },
            ]
        });
    })

});