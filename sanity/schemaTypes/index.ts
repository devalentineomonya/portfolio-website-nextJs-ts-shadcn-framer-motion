import { type SchemaTypeDefinition } from "sanity";

import { projectTypes } from "./projectTypes";
import { blogTypes } from "./blogTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectTypes, blogTypes],
};
