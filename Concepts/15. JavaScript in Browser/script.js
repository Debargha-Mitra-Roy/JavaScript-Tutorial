let a = prompt("Enter a here");
alert("You entered a of type " + (typeof a));
// document.write(a);

let b = prompt("Enter a here", "578");
b = Number.parseInt(b);
alert("You entered a of type " + (typeof b));

let write = confirm("Do ypu want to write it to the page?");

if (write) {
    document.write(b);
}

else {
    document.write("Please allow me to write.");
}