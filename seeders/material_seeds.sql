DROP DATABASE IF EXISTS materials_db;

CREATE DATABASE materials_db;

USE materials_db;

INSERT INTO materials (materialName, pricePerUnit, createdAt, updatedAt)
values ("masking tape", 6, NOW(), NOW())

INSERT INTO materials (materialName, pricePerUnit, createdAt, updatedAt)
values ("stir sitcks", .75, NOW(), NOW())

INSERT INTO materials (materialName, pricePerUnit, createdAt, updatedAt)
values ("roller frame", 2.75, NOW(), NOW())

INSERT INTO materials (materialName, pricePerUnit, createdAt, updatedAt)
values ("roller cover", 2.15, NOW(), NOW())

INSERT INTO materials (materialName, pricePerUnit, createdAt, updatedAt)
values ("paint tray", .80, NOW(), NOW())
