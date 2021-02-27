const db = firebase.firestore();
// console.log(db);
const doc = document;

function setData() {
  //   alert("---->>>", setData);
  var title = doc.getElementById("title-input").value
  var select = doc.getElementById("select-input").value
  var condition = doc.getElementById("condition-input").value
  var description = doc.getElementById("description-input").value

  var userData = {
    title: title,
    select: select,
    condition: condition,
    description: description,
  };
  db.collection("/products")
    .add(userData)
    .then((res) =>
     alert("Data Save"))
    .catch((e) =>
     console.log("eee", e));
  console.log(userData);
}