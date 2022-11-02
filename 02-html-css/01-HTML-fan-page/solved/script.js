// After you submit the form in the browser, check the console and you should see an array full of your responses.

// If it doesn't show in the console and you are directed to a separate page, delete the "action" attribute from the form in the index.html and try again

const formElem  = document.getElementById("beyonceForm");

formElem.onsubmit = (e) => {
    e.preventDefault();
    const rebFormData = new FormData(formElem);
    console.log([...rebFormData]);
}