export enum ParameterLookup {
	ProductId = "productId"
}

export enum QueryParameterLookup {
	ErrorCode = "errorCode"
}

export enum ViewNameLookup {
	ProductDetail = "productDetail",
	ProductListing = "productListing",
	SignIn = "signin", // communicate on name for this
	MainMenu = "mainMenu",
	EmployeeDetail = "employeeDetail"
}

export enum RouteLookup {
	// Page routing
	ProductListing = "/productListing",
	ProductDetail = "/productDetail",
	SignIn = "/",
	EmployeeDetail = "/employeeDetail",
	MainMenu = "/mainMenu",

	// Page routing - parameters
	ProductIdParameter = "/:productId",
	EmployeeIdParameter = "/:employeeId",
	// End page routing - parameters
	// End page routing

	// API routing
	API = "/api",
	// End API routing
}
