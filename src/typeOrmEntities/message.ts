import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class Message {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    datePosted: Date;

    @Column()
    deleted: boolean;

    @Column()
    ignore: boolean;
}