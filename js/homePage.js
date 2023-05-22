//UC4
window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});
//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Action</th>";
    const innerHtml = `${headerHtml}
        
            <tr>
                <td><img class="profile" src="/Assets/profile-images/Ellipse -3.png" alt=""s></td>
                <td>Ashwath</td>
                <td>Male</td>
                <td>
                    <div class='dept-label'>HR</div>
                    <div class="dept-label">Finance</div>
                </td>
                <td>3000000</td>
                <td>1 Nov 2020</td>
                <td>
                    <img id="1" onclick="remove(this)" src="../Assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="1" onclick="update(this)" src="../Assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}