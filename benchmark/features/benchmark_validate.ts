import TSON from "../../src";
// PURE TYPESCRIPT TYPES
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { ValidateBenchmarker } from "../internal/ValidateBenchmarker";
// IO-TS TYPES
import { IoTsArrayRecursive } from "../structures/io-ts/IoTsArrayRecursive";
import { IoTsArrayRecursiveUnionExplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionExplicit";
import { IoTsArrayRecursiveUnionImplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionImplicit";
import { IoTsObjectHierarchical } from "../structures/io-ts/IoTsObjectHierarchical";
import { IoTsObjectRecursive } from "../structures/io-ts/IoTsObjectRecursive";
import { IoTsObjectUnionExplicit } from "../structures/io-ts/IoTsObjectUnionExplicit";
import { IoTsObjectUnionImplicit } from "../structures/io-ts/IoTsObjectUnionImplicit";
import { IoTsUltimateUnion } from "../structures/io-ts/IoTsUltimateUnion";
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
import { ZodObjectRecursive } from "../structures/zod/ZodObjectRecursive";
import { ZodObjectUnionExplicit } from "../structures/zod/ZodObjectUnionExplicit";
import { ZodObjectUnionImplicit } from "../structures/zod/ZodObjectUnionImplicit";
import { ZodUltimateUnion } from "../structures/zod/ZodUltimateUnion";

const valiadate = () => [
    ValidateBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsObjectHierarchical.decode(input),
            zod: (input) => ZodObjectHierarchical.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsObjectRecursive.decode(input),
            zod: (input) => ZodObjectRecursive.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsObjectUnionExplicit.decode(input),
            zod: (input) => ZodObjectUnionExplicit.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsObjectUnionImplicit.decode(input),
            zod: (input) => ZodObjectUnionImplicit.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsArrayRecursive.decode(input),
            zod: (input) => ZodArrayRecursive.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsArrayRecursiveUnionExplicit.decode(input),
            zod: (input) => ZodArrayRecursiveUnionExplicit.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": (input) => IoTsArrayRecursiveUnionImplicit.decode(input),
            zod: (input) => ZodArrayRecursiveUnionImplicit.safeParse(input),
        },
    ),
    ValidateBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": (input) => TSON.validate(input),
            "io-ts": null,
            zod: null,
        },
    ),
];
export { valiadate as benchmark_validate };
