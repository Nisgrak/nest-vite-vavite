import { MikroOrmModule } from "@mikro-orm/nestjs";
import { forwardRef, Module } from "@nestjs/common";
import { Author } from "../entities/example.entity";
import { AuthorController } from "./author.controller";
import { AuthorService } from "./author.service";


@Module({
	imports: [
		MikroOrmModule.forFeature(
			[
				Author
			]
		),
	],
	controllers: [
		AuthorController
	],
	providers: [
		AuthorService
	],
	exports: [
		AuthorService
	]
})
export class AuthorModule { }
