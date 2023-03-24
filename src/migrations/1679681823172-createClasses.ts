import { MigrationInterface, QueryRunner } from "typeorm";

export class createClasses1679681823172 implements MigrationInterface {
    name = 'createClasses1679681823172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`classes\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` datetime(6) NULL,
                \`teacher_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`class_id\` bigint NULL
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
            ALTER TABLE \`tests\` DROP FOREIGN KEY \`FK_3a4e54902753a8b6415963a3ea6\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` CHANGE \`teacher_id\` \`teacher_id\` bigint NULL
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
            ALTER TABLE \`classes\`
            ADD CONSTRAINT \`FK_b34c92e413c4debb6e0f23fed46\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD CONSTRAINT \`FK_0372533220ea48efd136c335789\` FOREIGN KEY (\`class_id\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_0372533220ea48efd136c335789\`
        `);
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
            ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_b34c92e413c4debb6e0f23fed46\`
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
            ALTER TABLE \`tests\` CHANGE \`teacher_id\` \`teacher_id\` bigint NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD CONSTRAINT \`FK_3a4e54902753a8b6415963a3ea6\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
            ALTER TABLE \`users\` DROP COLUMN \`class_id\`
        `);
        await queryRunner.query(`
            DROP TABLE \`classes\`
        `);
    }

}
