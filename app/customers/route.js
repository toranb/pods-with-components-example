import Ember from "ember";
import inject from "podzz/utilities/inject";

export default Ember.Route.extend({
    repository: inject("customer"),
    model: function() {
        var repository = this.get("repository");
        return repository.find();
    }
});
