import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Author } from '../src/entities/example.entity';
import { AuthorModule } from '../src/author/author.module';

describe('Cats', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = (await createNestApplication(AuthorModule)).getHttpServer()
    });

    it(`/GET cats`, () => {
        return request(app)
            .get('/test/test')
            .expect(200)
            .expect(
                [{
                    id: 1,
                    createdAt: "NOW()"
                }]
            );
    });

    afterAll(async () => {
        await app.close();
    });
});


export async function createNestApplication(module: any): Promise<INestApplication>;
export async function createNestApplication(module: any[]): Promise<INestApplication> {

    if (!Array.isArray(module)) module = [module];

    const moduleRef = await Test.createTestingModule({
        imports: [
            MikroOrmModule.forRoot({
                entities: [Author],
                discovery: { disableDynamicFileAccess: true },
                dbName: 'my-db-name.sqlite3',
                type: 'sqlite',
            }),
            ...module
        ]
    })
        .compile();

    const app = moduleRef.createNestApplication();

    await app.init();

    return app;

}