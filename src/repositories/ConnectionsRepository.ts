import { EntityRepository, Repository } from "typeorm";
import { Connections } from "../models/connections";

@EntityRepository(Connections)
class ConnectionsRepository extends Repository<Connections> {

}

export { ConnectionsRepository }