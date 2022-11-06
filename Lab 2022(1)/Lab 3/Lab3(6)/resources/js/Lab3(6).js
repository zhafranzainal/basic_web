program = prompt("Enter your program code (BCS/BCN/BCG/DCS)");
program = program.toUpperCase();

switch (program) {

    case "BCS":
        document.write("Software Engineering");
        break;

    case "BCN":
        document.write("Computer Systems and Networking");
        break;

    case "BCG":
        document.write("Graphic and Multimedia");
        break;

    case "DCS":
        document.write("Diploma");
        break;

    default:
        document.write("Not an FK undergraduate student");

}
