module.exports  = (connection, DataTypes) => {
  return daily = connection.define('Daily', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: null
    }
  })
};