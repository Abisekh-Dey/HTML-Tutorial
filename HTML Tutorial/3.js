document.addEventListener('DOMContentLoaded', (event) => {
    let sub = document.querySelector("form");
    sub.onsubmit = (e) => {
        e.preventDefault();

        let n = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let m = document.querySelector("#mno").value;
        let se = document.querySelector("#sube").value;
        let t = document.querySelector("#bigt").value;

        // Accumulate the output in a single string
        let output = `
            <p>Name is: ${n}</p>
            <p>Email is: ${email}</p>
            <p>Mobile Number is: ${m}</p>
            <p>Subject: ${se}</p>
            <p>Message is: ${t}</p>
        `;

        // Display the output in the designated container
        document.querySelector("#output").innerHTML = output;
    }
});
