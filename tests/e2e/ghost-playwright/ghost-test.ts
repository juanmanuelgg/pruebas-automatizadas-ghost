import { test as base } from '@playwright/test';

export type TestOptions = {
    ghostVersion: string;
    ghostPort: string;
};

export const test = base.extend<TestOptions>({
    ghostVersion: ['latest', { option: true }],
    ghostPort: ['8080', { option: true }]
});
