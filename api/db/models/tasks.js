module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    title: DataTypes.TEXT,
    isDone: DataTypes.TEXT,
    importance: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate : DataTypes.NOW
    }
  }, {});

  return Tasks;
};

