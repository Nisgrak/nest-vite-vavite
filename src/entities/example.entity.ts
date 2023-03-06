import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Author {


    @PrimaryKey({ type: "integer" })
    id!: string;

    @Property({ type: "timestampz" })
    createdAt: Date = new Date();
}