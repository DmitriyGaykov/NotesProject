import {MiddlewareConsumer, Module} from "@nestjs/common";
import { ConfigModule } from './config/config.module';
import {_TypeOrmModule} from "./db/type-orm.module";
import { NotesModule } from './notes/notes.module';
import { ErrorModule } from './error/error.module';
import {_GraphQLModule} from "./graph-ql/graph-ql.module";
import * as cors from 'cors'

@Module({
  imports: [
      ConfigModule,
      _TypeOrmModule,
      _GraphQLModule,
      NotesModule,
      ErrorModule,
  ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                cors({
                    origin: 'http://localhost:3000',
                    credentials: true
                })
            )
            .forRoutes('*')
    }
}

export type Nullable<T> = T | null
