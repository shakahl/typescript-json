export function _test_is<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => boolean,
    spoilers?: Array<(elem: T) => void>,
): () => void {
    return () => {
        if (validator(generator()) === false)
            throw new Error(
                `Bug on TSON.is(): failed to understand the ${name} type.`,
            );

        (spoilers || []).forEach((spoil, i) => {
            const elem: T = generator();
            spoil(elem);

            if (validator(elem) === true)
                throw new Error(
                    `Bug on TSON.is(): failed to detect error on the ${name} (${i}) type.`,
                );
        });
    };
}
