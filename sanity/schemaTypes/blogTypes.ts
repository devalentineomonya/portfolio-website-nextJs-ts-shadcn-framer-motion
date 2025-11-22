import { defineField, defineType } from "sanity";


export const blogTypes = defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "path",
            type: "slug",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "readTime",
            type: "number",
            validation: (rule) => rule.required().positive(),
        }),
        defineField({
            name: "datePublished",
            type: "datetime",
            validation: (rule) => rule.required(),
        }),
    ],
});
