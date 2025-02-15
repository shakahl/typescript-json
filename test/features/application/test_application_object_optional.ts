import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_application } from "./_test_application";

export const test_application_object_optional = _test_application(
    "optional object",
    TSON.application<[ObjectOptional]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectOptional",
            },
        ],
        components: {
            schemas: {
                ObjectOptional: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        email: {
                            type: "string",
                            nullable: false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
