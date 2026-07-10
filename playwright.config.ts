import {defineConfig} from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'https://automationexercise.com',
    },

    testDir: './tests',
    timeout: 30000, 
    projects: [
        {
            name: 'chromium',
            use: {browserName: 'chromium'},
        },
        {
            name: 'firefox',

            use: {browserName: 'firefox'},
        },
        {
            name: 'webkit',
            use: {browserName: 'webkit'},
        },
    ],


});