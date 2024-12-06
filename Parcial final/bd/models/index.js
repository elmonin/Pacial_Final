import { definePqrs } from './pqrs.model.js'

export function defineModels(sequelize){
    definePqrs(sequelize)
}