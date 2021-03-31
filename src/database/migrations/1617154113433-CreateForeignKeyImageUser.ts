import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeyImageUser1617154113433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'images',
            new TableForeignKey({
              name: 'ImageContact',
              columnNames: ["user_id"],
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
            }),
          );
        }
      
        public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropForeignKey('images', 'ImageContact');
        }
      }