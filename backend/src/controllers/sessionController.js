const conn = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(request, response){
    const { id } = request.body;
    const ong = await conn('ongs').where('id', id).select('name').first();

    if(!ong){
      return response.status(400).json({error: 'NO ONG'});
    }

    return response.json(ong);
  },
}