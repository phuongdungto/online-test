import { MigrationInterface, QueryRunner } from "typeorm";

export class updateClass1679685396577 implements MigrationInterface {
    name = 'updateClass1679685396577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD \`class_id\` bigint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP COLUMN \`question\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD \`question\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD CONSTRAINT \`FK_af99930c4bdce16544496de5f7c\` FOREIGN KEY (\`class_id\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP FOREIGN KEY \`FK_af99930c4bdce16544496de5f7c\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP COLUMN \`question\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD \`question\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP COLUMN \`class_id\`
        `);
    }

}
