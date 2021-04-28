import { EntityRepository, Repository } from "typeorm";
import { Users } from "../models/users";

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {

}

export { UsersRepository }