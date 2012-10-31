var viewModel = new TaxViewModel();
pager.extendWithPage(viewModel);
ko.applyBindings(viewModel);
pager.start(viewModel);
