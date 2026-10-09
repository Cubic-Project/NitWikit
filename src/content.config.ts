import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection, z } from "astro:content";
import { topicSchema } from "starlight-sidebar-topics/schema";

export const collections = {
    docs: defineCollection({
        loader: docsLoader(),
        schema: docsSchema({
            extend: topicSchema.extend({
                giscus: z.boolean().optional().default(true)
            })
        })
    })
};
