// const formdata = document.getElementById("booking-form");
// const handlesubmit = (e) => {
//   e.preventDefault();
//   console.log(e.target.elements);
//   const fullname = e.target.elements["fullname"].value;
//   console.log(fullname);
//   const email = e.target.elements["email"].value;
//   console.log(email);
//   const doctor = e.target.elements["doctor"].value;
//   console.log(doctor);
//   const date = e.target.elements["date"].value;
//   console.log(date);

//   const datatoload = {
//     fullname,
//     email,
//     doctor,
//     date: new Date(date),
//   };
//   makerequest(datatoload);
// };
// formdata.addEventListener("submit", handlesubmit);

// async function makerequest(datatoload) {
//   const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(datatoload),
//   });
//   const requestjson = await request.json();
//   console.log(requestjson);
// }

// // **********name and mail validity*******
// const fullname = document.getElementById("fullname");
// const emailid = document.getElementById("email");
// const invalidNames = ["Winter Soldier", "Iron Man", "Black Widow", "Loki"];

// fullname.addEventListener("focus", (e) => {
//   console.log("in-focus");
// });
// fullname.addEventListener("blur", (e) => {
//   console.log("in-blur");
//   if (notvalidnames(e.target.value)) {
//     alert("invalid name");
//   }
//   localStorage.setItem("fullname", e.target.value);
// });
// emailid.addEventListener("blur", (e) => {
//   console.log("in-blur");
//   if (!validemail(e.target.value)) {
//     alert("invalid email");
//   }
//   localStorage.setItem("email", e.target.value);
// });
// const date = document.getElementById("date");
// localStorage.setItem("date", Date(date));

// const notvalidnames = (name) => {
//   if (invalidNames.includes(name)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const validemail = (email) => {
//   if (email.length < 5) {
//     return false;
//   }
//   return true;
// };

// // document.addEventListener("DOMContentLoaded", () => {
// //   console.log("Dom content loaded");
// //   const fullname = localStorage.getItem("fullname");
// //   const email = localStorage.getItem("email");
// //   console.log(fullname, email);
// //   document.getElementById("fullname").setAttribute("value", fullname);
// //   document.getElementById("email").setAttribute("value", email);
// // });
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Dom content loaded");
//   const payload = JSON.parse(localStorage.getItem("formdata"));
//   console.log(fullname, email);
//   document.getElementById("fullname").setAttribute("value", fullname);
//   document.getElementById("email").setAttribute("value", email);
// });
