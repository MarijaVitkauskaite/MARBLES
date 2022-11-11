module.exports  = (connection, DataTypes) => {
    return habit = connection.define('Habit', {
    id_habit: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    habit: {
        type: DataTypes.STRING,
        allowNull: false
    }
    })
};