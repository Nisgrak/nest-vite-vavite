import { Controller, forwardRef, Get, Inject } from "@nestjs/common";
import { AuthorService } from "./author.service";


@Controller('test')
export class AuthorController {


	constructor(
		@Inject(AuthorService)
		private readonly authorService: AuthorService
	) { }


	@Get('test')
	public findAll() {
		console.log("Test", this.authorService);
		return this.authorService.getAll();

	}

}
