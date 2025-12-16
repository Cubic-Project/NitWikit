import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
    integrations: [
        starlight({
            title: "My Docs",
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", slug: "guides/example" }
                    ]
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" }
                }
            ]
        }),
        AstroPWA({
            registerType: "autoUpdate",

            manifest: {
                name: "笨蛋文档",
                short_name: "笨蛋文档",
                theme_color: "#2196f3",
                background_color: "#424242",
                display: "standalone",
                start_url: "/",
                icons: [
                    {
                        src: "/icons/book-192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/icons/book-512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ],

                related_applications: [
                    {
                        platform: "webapp",
                        url: "https://nitwikit.8aka.org/manifest.json"
                    }
                ]
            }
        })
    ],

    vite: {
        plugins: [tailwindcss()]
    }
});
