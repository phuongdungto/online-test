import { MigrationInterface, QueryRunner } from "typeorm";

export class init1679655691056 implements MigrationInterface {
    name = 'init1679655691056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`test_details\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`user_id\` bigint NULL,
                \`test_id\` bigint NULL,
                \`question\` int NULL,
                \`answer\` int NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`tests\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`type\` enum ('listening', 'writing', 'reading') NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`marks\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`mark\` int NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` datetime(6) NULL,
                \`user_id\` bigint NULL,
                \`test_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`fullname\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`role\` enum ('admin', 'teacher', 'student') NOT NULL DEFAULT 'student',
                \`number_phone\` varchar(255) NOT NULL,
                \`birth_day\` datetime NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
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
            ALTER TABLE \`test_details\` DROP FOREIGN KEY \`FK_1b4e6a0eb08a1630798c40a0203\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP FOREIGN KEY \`FK_daca35b44a3df9522b48901ace8\`
        `);
        await queryRunner.query(`
            DROP TABLE \`users\`
        `);
        await queryRunner.query(`
            DROP TABLE \`marks\`
        `);
        await queryRunner.query(`
            DROP TABLE \`tests\`
        `);
        await queryRunner.query(`
            DROP TABLE \`test_details\`
        `);
    }

}
