import {
    DataTypes,
    InferCreationAttributes,
    InferAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../utils/database";

export class Pack extends Model<
    InferAttributes<Pack>,
    InferCreationAttributes<Pack>
> {
    declare id: number;
    declare pack_id: number;
    declare product_id: number;
    declare qty: number;
}

Pack.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        pack_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        qty: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Pack",
        tableName: "packs",
        timestamps: false,
    },
);
