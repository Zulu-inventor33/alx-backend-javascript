/**
 * Handles the miscellaneous route handlers.
 * @author Kelvin Mutea <https://github.com/Zulu-inventor33>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
