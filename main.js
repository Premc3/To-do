let checkedArray = [];
fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
  return data.json();
}).then((objectData) => {
  let tableData = "";
  objectData.forEach((values) => {
    tableData += `
        <tr> 
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>
          <input 
              id="Checkbox-${values.id}" 
              onClick="checkBoxClicked(${values.id})" 
              type="checkbox"
        ></td>
      </tr>`;
  });
  document.getElementById("table_body").innerHTML = tableData;

  objectData.forEach(data => {
    let currentComponent = document.getElementById(`Checkbox-${data.id}`)
    currentComponent.checked = data.completed;
    currentComponent.disabled = data.completed
  })
})

function checkBoxClicked(id) {
  checkBoxPromise().then(function (response) {
    checkedArray.push(id)
  }).catch(function (error) {
    alert("You have completed 5 tasks")
  })
}
let checkBoxPromise = () => {
  return new Promise((resolve, reject) => {
    if (checkedArray.length < 4) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}




