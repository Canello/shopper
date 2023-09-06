import {
    DataTypes,
    InferCreationAttributes,
    InferAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../utils/database";

export class Product extends Model<
    InferAttributes<Product>,
    InferCreationAttributes<Product>
> {
    declare code: number;
    declare name: string;
    declare cost_price: number;
    declare sales_price: number;
}

Product.init(
    {
        code: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cost_price: {
            type: DataTypes.DECIMAL(9, 2),
            allowNull: false,
        },
        sales_price: {
            type: DataTypes.DECIMAL(9, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: false,
    },
);
