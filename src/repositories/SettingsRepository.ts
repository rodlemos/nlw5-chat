import { EntityRepository, Repository } from "typeorm";
import { Settings } from "../models/settings";

@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {

}

export { SettingsRepository }