import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase1Relations1573098517872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property" ADD "owner_id" int`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD "property_id" int`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD "user_id" int`, undefined);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_2541d2fb798d385a0521553370d" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_5597161ba02971a62c629fc5a44" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_5597161ba02971a62c629fc5a44"`, undefined);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_2541d2fb798d385a0521553370d"`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "property_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "owner_id"`, undefined);
    }

}
