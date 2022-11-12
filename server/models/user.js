module.exports  = (connection, DataTypes) => {
  return user = connection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  })
};
