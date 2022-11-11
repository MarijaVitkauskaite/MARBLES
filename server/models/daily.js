module.exports  = (connection, DataTypes) => {
  return daily = connection.define('Daily', {
    id_daily: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
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