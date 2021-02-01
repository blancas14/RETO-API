
module.exports = (sequelize,DataTypes)=>{
    return sequelize.define(
        "peliculas",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement:true,
                primaryKey:true,
            },
            titulo : {type: DataTypes.STRING},
            episodio_id : {type: DataTypes.STRING},
            rastreo_apertura : {type: DataTypes.STRING},
            director : {type: DataTypes.STRING},
            productor : {type: DataTypes.STRING},
            fecha_lanzamiento : {type: DataTypes.STRING},
            personajes : {type: DataTypes.STRING},   
            planetas : {type: DataTypes.STRING},
            naves_estelares : {type: DataTypes.STRING},
            vehiculos : {type: DataTypes.STRING},
            especies : {type: DataTypes.STRING},
            creado : {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull:false
                },
            editado : {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull:false
            },
            url : {type: DataTypes.STRING}
    },
    {
        paranoid:true,
        underscored:true
    });

}
    
