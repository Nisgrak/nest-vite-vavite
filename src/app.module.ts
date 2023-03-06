import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { AuthorModule } from "./author/author.module";
import { Author } from "./entities/example.entity";

@Module({
    controllers: [],
    imports: [
        MikroOrmModule.forRootAsync({
            useFactory: () => ({

                autoLoadEntities: true,
                discovery: { disableDynamicFileAccess: true },
                dbName: 'my-db-name.sqlite3',
                type: 'sqlite',
            })
        }),
        AuthorModule
    ],
    providers: [],
})
export class AppModule { }
