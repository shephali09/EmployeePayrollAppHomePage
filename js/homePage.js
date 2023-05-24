//UC6
let empPayrollList = [];

window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

        if(empPayrollList.length == 0)return;


    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        innerHtml += `
            <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData.date}</td>
                <td>
                    <img name="${empPayrollData._id}" src="../Assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
                    <img name="${empPayrollData._id}" src="../Assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
                </td>
            </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
};

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Joe',
            _gender: 'Female',
            _department: ['HR'],
            _salary: 350000,
            _startDate: '20 Jul 2016',
            _note: 'Test',
            _id: new Date().getTime(),
            _profileImage: '../Assets/profile-images/Ellipse -4.png'
        },
        {
            _name: 'Karthik',
            _gender: 'Male',
            _department: ['Engineer'],
            _salary: 400000,
            _startDate: '02 Mar 2020',
            _note: 'Test to JSON',
            _id: new Date().getTime(),
            _profileImage: '../Assets/profile-images/Ellipse -3.png'
        }
    ];
    return empPayrollListLocal;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml += `<div class='dept-label'>${dept}</div>`;
    }
    return deptHtml;
};
