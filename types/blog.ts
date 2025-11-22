export interface Blog {
    title: string;
    description: string;
    path: {
        current: string;
        _type: "slug";
    };
    readTime: number;
    datePublished: string;
}
