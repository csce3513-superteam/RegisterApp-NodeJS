import express from "express";
import { RouteLookup } from "../controllers/lookups/routingLookup";
import * as SearchRouteController from "../controllers/searchRouteController";

function searchRoutes(server: express.Express) {
	server.get(RouteLookup.Search, SearchRouteController.start);
}

module.exports.routes = searchRoutes;