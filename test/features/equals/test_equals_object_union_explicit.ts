import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_equals } from "./_test_equals";

export const test_equals_object_union_explicit = _test_equals(
    "explicit union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.equals(input),
);
