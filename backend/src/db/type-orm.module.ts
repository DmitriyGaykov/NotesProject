import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "../config/config.module";
import {ConfigService} from "../config/config.service";
import {Note} from "./entities/note.entity";

export const _TypeOrmModule = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService : ConfigService) : TypeOrmModule => {
        const
            type = configService.get('DB_TYPE'),
            host = configService.get('DB_HOST'),
            port = parseInt(configService.get('DB_PORT')),
            username = configService.get('DB_USERNAME'),
            password = configService.get('DB_PASSWORD'),
            database = configService.get('DB_NAME')

        return {
            type,
            host,
            port,
            username,
            password,
            database,
            entities: [Note],
            synchronize: true,
        }
    },
    inject: [ConfigService]
})