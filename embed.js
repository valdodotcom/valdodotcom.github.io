const readline = require('readline');
const convertLink = (links) => {
    const secondLink = "https://drive.google.com/uc?export=view&id=";
    const finalLinks = [];
    for (let firstLink of links) {
        const match = firstLink.match(/\/d\/(.*)\/view/);
        if (match) {
            const id = match[1];
            const finalLink = secondLink + id;
            finalLinks.push(finalLink);
        } else {
            finalLinks.push("No match found.");
        }
    }
    return finalLinks;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter links separated by commas: ", (links) => {
    const linksArray = links.split(",");
    const result = convertLink(linksArray);
    console.log(result);
    rl.close();
});
