import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUser1679677528800 implements MigrationInterface {
    name = 'updateUser1679677528800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD \`teacher_id\` bigint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP FOREIGN KEY \`FK_daca35b44a3df9522b48901ace8\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP FOREIGN KEY \`FK_1b4e6a0eb08a1630798c40a0203\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`user_id\` \`user_id\` bigint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`test_id\` \`test_id\` bigint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`question\` \`question\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`answer\` \`answer\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` DROP FOREIGN KEY \`FK_c6f61be2ef1af1de009594206a5\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` DROP FOREIGN KEY \`FK_7ddab722ffb35d462d1eca5b5d9\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` CHANGE \`user_id\` \`user_id\` bigint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` CHANGE \`test_id\` \`test_id\` bigint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD CONSTRAINT \`FK_daca35b44a3df9522b48901ace8\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD CONSTRAINT \`FK_1b4e6a0eb08a1630798c40a0203\` FOREIGN KEY (\`test_id\`) REFERENCES \`tests\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD CONSTRAINT \`FK_3a4e54902753a8b6415963a3ea6\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\`
            ADD CONSTRAINT \`FK_c6f61be2ef1af1de009594206a5\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\`
            ADD CONSTRAINT \`FK_7ddab722ffb35d462d1eca5b5d9\` FOREIGN KEY (\`test_id\`) REFERENCES \`tests\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`marks\` DROP FOREIGN KEY \`FK_7ddab722ffb35d462d1eca5b5d9\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` DROP FOREIGN KEY \`FK_c6f61be2ef1af1de009594206a5\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP FOREIGN KEY \`FK_3a4e54902753a8b6415963a3ea6\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP FOREIGN KEY \`FK_1b4e6a0eb08a1630798c40a0203\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP FOREIGN KEY \`FK_daca35b44a3df9522b48901ace8\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` CHANGE \`test_id\` \`test_id\` bigint NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` CHANGE \`user_id\` \`user_id\` bigint NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\`
            ADD CONSTRAINT \`FK_7ddab722ffb35d462d1eca5b5d9\` FOREIGN KEY (\`test_id\`) REFERENCES \`tests\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`marks\`
            ADD CONSTRAINT \`FK_c6f61be2ef1af1de009594206a5\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`answer\` \`answer\` int NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`question\` \`question\` int NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`test_id\` \`test_id\` bigint NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` CHANGE \`user_id\` \`user_id\` bigint NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD CONSTRAINT \`FK_1b4e6a0eb08a1630798c40a0203\` FOREIGN KEY (\`test_id\`) REFERENCES \`tests\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD CONSTRAINT \`FK_daca35b44a3df9522b48901ace8\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP COLUMN \`teacher_id\`
        `);
    }

}
