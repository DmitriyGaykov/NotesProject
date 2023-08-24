import { Module } from "@nestjs/common";
import { ConfigModule } from './config/config.module';
import {_TypeOrmModule} from "./db/type-orm.module";
import { NotesModule } from './notes/notes.module';
import {DataSource} from "typeorm";
import { ErrorModule } from './error/error.module';

@Module({
  imports: [
      ConfigModule,
      _TypeOrmModule,
      NotesModule,
      ErrorModule
  ],
})
export class AppModule {
  constructor(
      private readonly dataSource: DataSource
  ) {
  }
}

export type Nullable<T> = T | null
