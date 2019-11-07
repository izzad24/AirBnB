import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase31573106558289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "regionName" nvarchar(255) NOT NULL, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "review" ("id" int NOT NULL IDENTITY(1,1), "review" nvarchar(255) NOT NULL, "rating" int NOT NULL, "property_id" int, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "comment" ("id" int NOT NULL IDENTITY(1,1), "message" nvarchar(255) NOT NULL, "user_id" int, "review_id" int, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_locality" ("locality_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_3cf7d6fc5df0202a21061f0de2e" PRIMARY KEY ("locality_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_5e0a85276d5873eae3c10cde10" ON "property_locality" ("locality_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_eba048eb827ffd0407f2bf9baa" ON "property_locality" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_95f093aedad4d0fe6901890a645" FOREIGN KEY ("review_id") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" ADD CONSTRAINT "FK_5e0a85276d5873eae3c10cde100" FOREIGN KEY ("locality_id") REFERENCES "locality"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" ADD CONSTRAINT "FK_eba048eb827ffd0407f2bf9baa0" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_locality" DROP CONSTRAINT "FK_eba048eb827ffd0407f2bf9baa0"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" DROP CONSTRAINT "FK_5e0a85276d5873eae3c10cde100"`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_95f093aedad4d0fe6901890a645"`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`, undefined);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_eba048eb827ffd0407f2bf9baa" ON "property_locality"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_5e0a85276d5873eae3c10cde10" ON "property_locality"`, undefined);
        await queryRunner.query(`DROP TABLE "property_locality"`, undefined);
        await queryRunner.query(`DROP TABLE "comment"`, undefined);
        await queryRunner.query(`DROP TABLE "review"`, undefined);
        await queryRunner.query(`DROP TABLE "locality"`, undefined);
    }

}
