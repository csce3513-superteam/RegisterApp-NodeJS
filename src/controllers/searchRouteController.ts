import { Request, Response } from "express";
import { ViewNameLookup } from "./lookups/routingLookup";
import { PageResponse } from "./typeDefinitions";

export const start = async (req: Request, res: Response): Promise<void> => {
	return res.render(
		ViewNameLookup.Search,
		<PageResponse>{}
	);
};