
module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("student", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'mrugendra@gmail.com'
        },
        gender: {
            type: DataTypes.STRING
        }
    },
        // {
        //     freezeTableName: false   //table name to be equal to the model name
        // },
        {
            tableName: 'studentInformation',
            timestamps: false,
            // createdAt:true, 
            // createdAt:'row_created_at',
            // updatedAt:'modified_at',
            engine: "MYISAM" //InnoDB, MYISAM, MEMORY, CSV, etc
        })
    return student;
}