"use strict";

export default (sequelize, DataTypes) => {
    var User = sequelize.define("User", {
        id: DataTypes.INTEGER,
        username: DataTypes.STRING
    }, {
        tableName: 'dmc_users',
        timestamps: false,
        classMethods: {
            associate(models) {

            }
        }
    });

    return User;
};