import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createPlaces1615988091784 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'places',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'title',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'city',
          type: 'text'
        },
        {
          name: 'neighborhood',
          type: 'text'
        },
        {
          name: 'address',
          type: 'text'
        },
        {
          name: 'phone',
          type: 'text'
        },
        {
          name: 'youtube',
          type: 'text'
        },
        {
          name: 'text',
          type: 'text'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('places')
  }
}