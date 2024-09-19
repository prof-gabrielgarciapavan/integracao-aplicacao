import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

const userRepository = AppDataSource.getRepository(User);

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    const usersAge25 = await userRepository.findBy({
        age: 25
    });

    console.log(usersAge25);

}).catch(error => console.log(error))
