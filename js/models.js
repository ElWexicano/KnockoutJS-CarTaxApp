/**
 * A person object used for storing information
 * about a person.
 */
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
		return Math.floor(((new Date() - self.dateOfBirth.getDate) / 1000 / (60 * 60 * 24)) / 365.25);
	});

    self.compare = function(person) {
        if (self.fullName() < person.fullName()) {
            return -1;
        } else if (self.fullName() > person.fullName()) {
            return 1;
        } else {
            return 0;
        }
    };
}



/**
 * An Address object used for storing information
 * about a person's address.
 */
function Address(street, town, county, country) {
	var self = this;
	self.street = street;
	self.town = town;
	self.county = county;
	self.country = country;
	
	self.fullAddress = ko.computed(function() {
		return self.street + ", " + self.town + ", Co. " + self.county;
	});

    self.compare = function(address) {
        if (self.fullAddress() < address.fullAddress()) {
            return -1;
        } else if (self.fullAddress() > address.fullAddress()) {
            return 1;
        } else {
            return 0;
        }
    };
}



/**
 * A vehicle object used for storing
 * details about a vehicle.
 */
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

	self.compare = function(vehicle) {
        if (self.registration() < vehicle.registration()) {
            return -1;
        } else if (self.registration() > vehicle.registration()) {
            return 1;
        } else {
            return 0;
        }
	};
}




/**
 * The Date Of Birth object is used to
 * store a person's date of birth.
 */
function DateOfBirth(day, month, year) {
    var self = this;
    self.getDate = new Date(year, month - 1, day);

    self.displayDate = ko.computed(function() {
        return self.getDate.toLocaleDateString();
    });

    self.timestamp = ko.computed(function() {
        return self.getDate.getTime();
    });

    self.compare = function(dateOfBirth) {
        if (self.timestamp() > dateOfBirth.timestamp()) {
            return -1;
        } else if (self.timestamp() < dateOfBirth.timestamp()) {
            return 1;
        } else {
            return 0;
        }
    }
}







/**
 * The Tax View Model used to bind the data
 * to the GUI.
 */
function TaxViewModel() {
	// Data
	var self = this;
	
	/**
	 * Application Data
	 */
	self.counties = ko.observableArray(["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Derry", "Donegal", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"]);
	self.persons = ko.observableArray([
		new Person("Joe", "Bloggs", new DateOfBirth("25", "01", "1988"), new Address("12 North Street","New Ross","Wexford","Ireland"), "1234567A"),
		new Person("Jane", "Eggs", new DateOfBirth("11", "12", "1980"), new Address("9 Docks","New Ross","Wexford","Ireland"), "1234567B"),
		new Person("Jim", "Los", new DateOfBirth("02", "07", "1978"), new Address("2 Main Street","Glenmore","Kilkenny","Ireland"), "1234567C"),
		new Person("Joe", "Bloggs", new DateOfBirth("25", "01", "1988"), new Address("12 North Street","New Ross","Wexford","Ireland"), "1234567A"),
		new Person("Jane", "Eggs", new DateOfBirth("11", "12", "1980"), new Address("9 Docks","New Ross","Wexford","Ireland"), "1234567B"),
		new Person("Jim", "Los", new DateOfBirth("02", "07", "1978"), new Address("2 Main Street","Glenmore","Kilkenny","Ireland"), "1234567C"),
		new Person("Joe", "Bloggs", new DateOfBirth("25", "01", "1988"), new Address("12 North Street","New Ross","Wexford","Ireland"), "1234567A"),
		new Person("Jane", "Eggs", new DateOfBirth("11", "12", "1980"), new Address("9 Docks","New Ross","Wexford","Ireland"), "1234567B"),
		new Person("Jim", "Los", new DateOfBirth("02", "07", "1978"), new Address("2 Main Street","Glenmore","Kilkenny","Ireland"), "1234567C"),
		new Person("Joe", "Bloggs", new DateOfBirth("25", "01", "1988"), new Address("12 North Street","New Ross","Wexford","Ireland"), "1234567A"),
		new Person("Jane", "Eggs", new DateOfBirth("11", "12", "1980"), new Address("9 Docks","New Ross","Wexford","Ireland"), "1234567B"),
		new Person("Jim", "Los", new DateOfBirth("02", "07", "1978"), new Address("2 Main Street","Glenmore","Kilkenny","Ireland"), "1234567C")
	]);
	self.vehicles = ko.observableArray([
		new Vehicle("00WX474", "Opel", "Corsa", 1.0, 2000),
		new Vehicle("04KK700", "Volkswagen", "Golf", 1.4, 2004),
		new Vehicle("08W14", "Renault", "Megane", 1.3, 2008),
		new Vehicle("00WX474", "Opel", "Corsa", 1.0, 2000),
		new Vehicle("04KK700", "Volkswagen", "Golf", 1.4, 2004),
		new Vehicle("08W14", "Renault", "Megane", 1.3, 2008),
		new Vehicle("00WX474", "Opel", "Corsa", 1.0, 2000),
		new Vehicle("04KK700", "Volkswagen", "Golf", 1.4, 2004),
		new Vehicle("08W14", "Renault", "Megane", 1.3, 2008),
		new Vehicle("00WX474", "Opel", "Corsa", 1.0, 2000),
		new Vehicle("04KK700", "Volkswagen", "Golf", 1.4, 2004),
		new Vehicle("08W14", "Renault", "Megane", 1.3, 2008)
	]);
	
	/**
	 * Application Variables
	 */
	self.pageSize = ko.observable(10);
	self.personsPageIndex = ko.observable(0);
	self.vehiclesPageIndex = ko.observable(0);
	
	
	
	
	
	/**
	 * Application Functions
	 */ 
	self.viewVehicleRecord = function(vehicle) {};
	self.viewPersonalRecord = function(person) {};

	self.createPersonalRecord = function(person) {
		self.persons.push(person);
	};
	self.removePersonalRecord = function(person) {
		self.persons.remove(person);
	};
	
	self.createVehicleRecord = function(vehicle) {
		self.vehicles.push(vehicle);
	};
	self.removeVehicleRecord = function(vehicle) {
		self.vehicles.remove(vehicle);
	};


	/**
	 * Pagination Functions for Personal Records
	 */
	self.personsPagedList = ko.dependentObservable(function () {
		var size = self.pageSize();
		var start = self.personsPageIndex() * size;
		return self.persons.slice(start, start + size);
	});
	self.maxPersonsPageIndex = ko.dependentObservable(function () {
		return Math.ceil(self.persons().length/self.pageSize())-1;
	});
	self.firstPersonsPage = function () {
		if (self.personsPageIndex() != 0) {
			self.personsPageIndex(0);
		}
	};
	self.previousPersonsPage = function () {
		if (self.personsPageIndex() > 0) {
			self.personsPageIndex(self.personsPageIndex() - 1);
		}
	};
	self.nextPersonsPage = function () {
		if (self.personsPageIndex() < self.maxPersonsPageIndex()) {
			self.personsPageIndex(self.personsPageIndex() + 1);
		}
	};
	self.lastPersonsPage = function () {
		if (self.personsPageIndex() != self.maxPersonsPageIndex()) {
			self.personsPageIndex(self.maxPersonsPageIndex());
		}
	};
	
	/**
	 * Pagination Functions for Vehicle Records
	 */
	self.vehiclesPagedList = ko.dependentObservable(function () {
		var size = self.pageSize();
		var start = self.vehiclesPageIndex() * size;
		return self.vehicles.slice(start, start + size);
	});
	self.maxVehiclesPageIndex = ko.dependentObservable(function () {
		return Math.ceil(self.vehicles().length/self.pageSize())-1;
	});
	self.firstVehiclesPage = function () {
		if (self.vehiclesPageIndex() != 0) {
			self.vehiclesPageIndex(0);
		}
	};
	self.previousVehiclesPage = function () {
		if (self.vehiclesPageIndex() > 0) {
			self.vehiclesPageIndex(self.vehiclesPageIndex() - 1);
		}
	};
	self.nextVehiclesPage = function () {
		if (self.vehiclesPageIndex() < self.maxVehiclesPageIndex()) {
			self.vehiclesPageIndex(self.vehiclesPageIndex() + 1);
		}
	};
	self.lastVehiclesPage = function () {
		if (self.vehiclesPageIndex() != self.maxVehiclesPageIndex()) {
			self.vehiclesPageIndex(self.maxVehiclesPageIndex());
		}
	};
	
	/**
	 * Filter Functions for Personal Records
	 */
	 
	 
	 /**
	  * Filter Functions for Vehicle Records
	  */
}
