var vm = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123)
};

vm.same = ko.computed(function() {
    console.log("Computed is called");
    return this.personName() + "::";
}, vm)

vm.dedo = ko.computed(function() {
    return this.personAge() > 100 ? "hundie" : "madarchod";
}, vm)

ko.applyBindings(vm, $("body")[0]);

setTimeout(function() {
    vm.personName("Naya naam aagaya");
    vm.personAge(20);
}, 2000);