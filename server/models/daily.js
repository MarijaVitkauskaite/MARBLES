module.exports  = (connection, DataTypes) => {
  return daily = connection.define('Daily', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: null
    }
  })
};