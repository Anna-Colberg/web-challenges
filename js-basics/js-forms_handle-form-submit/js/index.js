console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElement = event.target.elements;
    const data = {
        firstName: formElement.firstName.value,
        lastName: formElement.lastName.value,
        age: formElement.age.value,
        email: formElement.email.value,
        complaint: formElement.complaint.value,
        details: formElement.details.value,
        badness: formElement.badness.value,
        orderDate: formElement.orderDate.value,
    };
    console.log("user date", data);
    event.target.reset();
})