import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_atomic_union = _test_application(
    "union atomic",
    TSON.application<[AtomicUnion]>(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true,
                        },
                        {
                            type: "number",
                            nullable: true,
                        },
                        {
                            type: "boolean",
                            nullable: true,
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
