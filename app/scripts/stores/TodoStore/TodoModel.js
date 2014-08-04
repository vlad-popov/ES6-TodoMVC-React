var Backbone = require('backbone');
class TodoModel extends Backbone.Model {
  defaults() {
    return {
      title: '',
      completed: false
    }
  }  
}

module.exports = TodoModel;