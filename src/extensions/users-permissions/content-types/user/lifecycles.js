const _ = require('lodash');

module.exports = {
  async afterCreate(event) {

      const { result } = event;
      console.log(result, event.params.data.doctor);

      await strapi.entityService.create('api::doctor.doctor', {
        data: {
          user: result.id,
          specialty: event.params.data.doctor.specialization,
          some_details: event.params.data.doctor.some_details
        },
      });

  }
}
