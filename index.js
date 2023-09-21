const { fetchBreedDescription } = require('./breedFetcher');

//creating a variable to receive arguments from the command line
const args = process.argv;

//creating a variable that takes the breed name from the third element of the array that is passed from the terminal
const breedName = args[2];

//creating a variable that takes the URL and adds the breedName to the query section of the URL

/*Utilize fetchBreedDescription as a callback
  *pass it the URL which contains the breedName query
  *utilize error, and desc as parameters
  *Where does error and desc arguments come from?
  *if there is an error, console.log a string and the error information
*/

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  } else {
    console.log(desc);
  }
});