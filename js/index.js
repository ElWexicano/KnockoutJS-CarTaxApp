function Person(firstName, lastName, dateOfBirth, address, ppsNumber) {
	var self = this;
	
	self.firstName = firstName;
	self.lastName = lastName;
	self.dateOfBirth = dateOfBirth;
	self.address = address;
	self.ppsNumber = ppsNumber;
	
	self.fullName = ko.computed(function() {
		return self.firstName + " " + self.lastName;
	});
	
	self.age = ko.computed(function() {
		return 12;
	});
}

function Address(street, town, county, country) {
	var self = this;
	self.street = street;
	self.town = town;
	self.county = county;
	self.country = country;
	
	self.fullAddress = ko.computed(function() {
		return self.street + ", " + self.town + ", Co. " + self.county;
	});
}

function Vehicle(reg, make, model, engineSize, year) {
	var self = this;
	self.registration = reg;
	self.make = make;
	self.model = model;
	self.engineSize = engineSize;
	self.year = year;
	
	self.makeAndModel = ko.computed(function() {
		return self.make + " " + self.model;
	});
	
}

function TaxViewModel() {
	// Data
	var self = this;
	self.chosenOperationId = ko.observable;
	self.chosenVehicleRecordData = ko.observable;
	self.chosenPersonalRecordData = ko.observable;
	
	self.counties = ko.observableArray(["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Derry", "Donegal", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"]);
	
	self.persons = ko.observableArray([
		new Person("Joe", "Bloggs", "25/01/1988", new Address("12 North Street","New Ross","Wexford","Ireland"), "1234567A"),
		new Person("Jane", "Eggs", "11/12/1980", new Address("9 Docks","New Ross","Wexford","Ireland"), "1234567B"),
		new Person("Jim", "Los", "02/07/1978", new Address("2 Main Street","Glenmore","Kilkenny","Ireland"), "1234567C")
	]);
	
	self.vehicles = ko.observableArray([
		new Vehicle("00WX474", "Opel", "Corsa", 1.0, 2000),
		new Vehicle("04KK700", "Volkswagen", "Golf", 1.4, 2004),
		new Vehicle("08W14", "Renault", "Megane", 1.3, 2008)
	]);
	
	// Functions
	self.viewVehicleRecord = function(vehicle) {};
	self.viewPersonalRecord = function(person) {};
	self.createVehicleRecord = function(vehicle) {};
	self.createPersonalRecord = function(person) {
		self.persons.push(person);
	};
	self.removePersonalRecord = function(person) {
		self.persons.remove(person);
	};
	self.removeVehicleRecord = function(vehicle) {
		self.vehicles.remove(vehicle);
	};
}

var viewModel = new TaxViewModel();
pager.extendWithPage(viewModel);
ko.applyBindings(viewModel);
pager.start(viewModel);
