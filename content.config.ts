import { defineCollection, z } from "@nuxt/content";

const variantEnum = z.enum(["solid", "outline", "subtle", "soft", "ghost", "link"]);
const colorEnum = z.enum([
  "primary",
  "secondary",
  "neutral",
  "error",
  "warning",
  "success",
  "info",
]);
const sizeEnum = z.enum(["xs", "sm", "md", "lg", "xl"]);

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum,
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum,
  variant: variantEnum,
});

export const collections = {
  content: defineCollection({
    source: "index.yml",
    type: "data",
    schema: z.object({
      title: z.string(),
      title_suffix: z.string(),
      description: z.string(),
      features: z.object({
        title: z.string(),
        title_suffix: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string(),
          })
        ),
      }),

      ecosystem: z.object({
        title: z.string(),
        description: z.string(),
      }),

      solutions: z.object({
        title: z.string(),
        title_suffix: z.string(),

        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            light_image: z.string(),
            dark_image: z.string(),
            features: z.array(
              z.object({
                icon: z.string(),
                description: z.string(),
              })
            ),
            links: z.array(linkSchema),
          })
        ),
      }),

      sponsors: z.object({
        title: z.string(),
        description: z.string(),
        links: z.array(
          z.object({
            label: z.string(),
            to: z.string(),
            variant: z.enum(["outline"]).optional(),
          })
        ),
      }),

      cta: z.object({
        title: z.string(),
        title_suffix: z.string(),
        description: z.string(),
        links: z.array(linkSchema),
      }),
    }),
  }),
};
