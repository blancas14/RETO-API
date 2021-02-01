const Sequelize=require("sequelize");
const sequelize=new Sequelize("postgres://lbtohkye:LLMxk9to8R1ge-JxMECuIjVg_o8MQ-Tq@ziggy.db.elephantsql.com:5432/lbtohkye");
const peliculas=require("./models/peliculas")(sequelize,Sequelize);

const db={
    Sequelize,
    sequelize,
    peliculas
};

//db.sequelize.sync({force:true});
db.sequelize.sync();

module.exports=db;

