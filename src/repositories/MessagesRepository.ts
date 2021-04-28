import { EntityRepository, Repository } from "typeorm";
import { Messages } from "../models/messages";

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages>{

}

export { MessagesRepository };