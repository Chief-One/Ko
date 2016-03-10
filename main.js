var vm = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123),
    submit: function(form) {
        console.log("Lets handle the KO submission");

        // var fv = $(form).data('formValidation');
        // fv.validate();
        // console.log("Form pass: " + fv.isValid());
    }
};

vm.same = ko.computed(function() {
    console.log("Computed is called");
    return this.personName() + "::";
}, vm);

ko.applyBindings(vm, $("body")[0]);

setTimeout(function() {
    ko.mapping.fromJS({
        personName: "naam toh aagaya",
        personAge: 20
    }, {}, vm);
}, 1000);

$(function() {
    $('form')
        .formValidation({
            live: 'submitted',
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The Name is required'
                        }
                    }
                }
            }
        })
        .on('success.form.fv', function(e) {
            //e.preventDefault();
            console.log("FV submit");
        });
});