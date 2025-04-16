import { Tool } from "@modelcontextprotocol/sdk/types.js";

// Define all tools
export const TOOLS: Tool[] = [
    {
        name: "puppeteer_navigate",
        description: "Navigate to a URL",
        inputSchema: {
            type: "object",
            properties: {
                url: { type: "string", description: "URL to navigate to" },
                launchOptions: { type: "object", description: "PuppeteerJS LaunchOptions. Default null. If changed and not null, browser restarts. Example: { headless: true, args: ['--no-sandbox'] }" },
                allowDangerous: { type: "boolean", description: "Allow dangerous LaunchOptions that reduce security. When false, dangerous args like --no-sandbox will throw errors. Default false." },
            },
            required: ["url"],
        },
    },
    {
        name: "puppeteer_screenshot",
        description: "Take a screenshot of the current page or a specific element",
        inputSchema: {
            type: "object",
            properties: {
                name: { type: "string", description: "Name for the screenshot" },
                selector: { type: "string", description: "CSS selector for element to screenshot" },
                width: { type: "number", description: "Width in pixels (default: 800)" },
                height: { type: "number", description: "Height in pixels (default: 600)" },
            },
            required: ["name"],
        },
    },
    {
        name: "puppeteer_click",
        description: "Click an element on the page",
        inputSchema: {
            type: "object",
            properties: {
                selector: { type: "string", description: "CSS selector for element to click" },
            },
            required: ["selector"],
        },
    },
    {
        name: "puppeteer_fill",
        description: "Fill out an input field",
        inputSchema: {
            type: "object",
            properties: {
                selector: { type: "string", description: "CSS selector for input field" },
                value: { type: "string", description: "Value to fill" },
            },
            required: ["selector", "value"],
        },
    },
    {
        name: "puppeteer_select",
        description: "Select an element on the page with Select tag",
        inputSchema: {
            type: "object",
            properties: {
                selector: { type: "string", description: "CSS selector for element to select" },
                value: { type: "string", description: "Value to select" },
            },
            required: ["selector", "value"],
        },
    },
    {
        name: "puppeteer_hover",
        description: "Hover an element on the page",
        inputSchema: {
            type: "object",
            properties: {
                selector: { type: "string", description: "CSS selector for element to hover" },
            },
            required: ["selector"],
        },
    },
    {
        name: "puppeteer_evaluate",
        description: "Execute JavaScript in the browser console",
        inputSchema: {
            type: "object",
            properties: {
                script: { type: "string", description: "JavaScript code to execute" },
            },
            required: ["script"],
        },
    },
    {
        name: "puppeteer_extract_images",
        description: "Extract all images from the page (both <img> tags and CSS background images)",
        inputSchema: {
            type: "object",
            properties: {
                selector: { type: "string", description: "Optional CSS selector to limit image extraction to a specific part of the page" },
                includeBackgroundImages: { type: "boolean", description: "Whether to include CSS background images (default: true)" },
            },
            required: [],
        },
    },
    {
        name: "puppeteer_download_images",
        description: "Download images to a specified folder",
        inputSchema: {
            type: "object",
            properties: {
                imageUrls: {
                    type: "array",
                    description: "Array of image URLs to download",
                    items: { type: "string" }
                },
                outputFolder: { type: "string", description: "Folder path where images should be saved (default: ./downloaded_images)" },
                namePrefix: { type: "string", description: "Optional prefix for downloaded image filenames" },
            },
            required: ["imageUrls"],
        },
    },
    {
        name: "puppeteer_analyze_element",
        description: "Analyze a DOM element to extract its HTML structure, Markdown representation, and applied styles",
        inputSchema: {
            type: "object",
            properties: {
                selector: { type: "string", description: "CSS selector for the element to analyze" },
                includeStyles: { type: "boolean", description: "Whether to include computed styles (default: true)" },
                maxDepth: { type: "number", description: "Maximum depth for nested elements (default: 10)" },
                includeSiblings: { type: "boolean", description: "Whether to include siblings of the selected element (default: false)" },
            },
            required: ["selector"],
        },
    },
    {
        name: "puppeteer_browser_status",
        description: "Check browser status, list open tabs, and manage tab switching",
        inputSchema: {
            type: "object",
            properties: {
                action: {
                    type: "string",
                    description: "Action to perform: 'status' to check browser status, 'list_tabs' to list all open tabs, 'switch_tab' to switch to a different tab, 'new_tab' to open a new tab",
                    enum: ["status", "list_tabs", "switch_tab", "new_tab"]
                },
                tabIndex: {
                    type: "number",
                    description: "Index of the tab to switch to (only required for 'switch_tab' action)"
                },
                url: {
                    type: "string",
                    description: "URL to open in the new tab (only for 'new_tab' action)"
                }
            },
            required: ["action"],
        },
    },
]; 