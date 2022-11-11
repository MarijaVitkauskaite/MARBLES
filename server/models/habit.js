module.exports  = (connection, DataTypes) => {
  return habit = connection.define('Habit', {
    habit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deletedAt: {
        type: DataTypes.DATE,
        default: null
    }
  })
};