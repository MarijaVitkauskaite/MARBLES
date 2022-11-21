module.exports = (connection: any, DataTypes: any) => {
  const habit = connection.define('Habit', {
    habit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false, 
      primaryKey: true,
    },
    deletedAt: {
        type: DataTypes.DATE,
        default: null
    },
    completed: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      default: [],
      allowNull: false
    }
  })
  return habit
};