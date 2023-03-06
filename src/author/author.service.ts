import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/sqlite';
import { Injectable, Logger } from '@nestjs/common';

import { Author } from '../entities/example.entity';

@Injectable()
export class AuthorService {


	constructor(
		@InjectRepository(Author)
		public readonly repository: EntityRepository<Author>,
	) {

	}


	getAll() {
		console.log(this.repository);
		return this.repository.findAll();
	}
}
