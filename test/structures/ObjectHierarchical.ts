import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectHierarchical = ObjectHierarchical.ICustomer;
export namespace ObjectHierarchical {
    export interface ICustomer {
        id: number;
        channel: IChannel;
        member: IMember | null;
        account: IAccount | null;
        href: string;
        referrer: string;
        ip: [number, number, number, number];
        created_at: ITimestamp;
    }
    export interface IChannel {
        id: number;
        code: string;
        name: string;
        sequence: number;
        exclusive: boolean;
        priority: number;
        created_at: ITimestamp;
    }
    export interface IAccount {
        id: number;
        code: string;
        created_at: ITimestamp;
    }
    export interface IMember {
        id: number;
        account: IAccount;
        enterprise: IEnterprise | null;
        emails: string[];
        created_at: ITimestamp;
        authorized: boolean;
    }
    export interface IEnterprise {
        id: number;
        account: IAccount;
        name: string;
        grade: number;
        created_at: ITimestamp;
    }
    export interface ITimestamp {
        time: number;
        zone: number;
    }

    export function generate(
        authorized: boolean = true,
        employeed: boolean = true,
    ): ObjectHierarchical {
        const account: IAccount | null = authorized ? generate_account() : null;
        const enterprise: IEnterprise | null = employeed
            ? {
                  id: RandomGenerator.integer(),
                  account: generate_account(),
                  name: RandomGenerator.string(),
                  grade: RandomGenerator.integer(),
                  created_at: generate_timestamp(),
              }
            : null;
        return {
            id: RandomGenerator.integer(),
            channel: {
                id: RandomGenerator.integer(),
                code: RandomGenerator.string(),
                name: RandomGenerator.string(),
                sequence: RandomGenerator.integer(),
                exclusive: RandomGenerator.boolean(),
                priority: RandomGenerator.integer(),
                created_at: generate_timestamp(),
            },
            account,
            member: account
                ? {
                      id: RandomGenerator.integer(),
                      account,
                      emails: [
                          "samchon.github@gmail.com",
                          "samchon@archisketch.com",
                      ],
                      created_at: generate_timestamp(),
                      authorized: true,
                      enterprise,
                  }
                : null,
            href: "https://github.com/samchon/typescript-json/blob/master/benchmark/data/recursive.ts",
            referrer: "https://github.com/samchon/typescript-json",
            ip: [127, 0, 0, 1],
            created_at: generate_timestamp(),
        };
    }

    const generate_timestamp: () => ITimestamp = () => ({
        time: Date.now(),
        zone: new Date().getTimezoneOffset(),
    });

    const generate_account: () => IAccount = () => ({
        id: RandomGenerator.integer(),
        code: RandomGenerator.string(),
        created_at: generate_timestamp(),
    });
}
