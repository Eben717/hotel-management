import { defineField } from "sanity";

const user = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField ({
            name: "isAdmin",
            title: "is Admin",
            type: 'boolean',
            description: 'Check if the user is admin',
            initialValue: false,
            validation: (Rule) => Rule.required(),
            // readOnly: true,
            // hidden: true,
        }),
        defineField ({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the user',
            readOnly: true,
        }),
        defineField ({
            name: 'image',
            title: 'Image',
            type: 'url',
        }),
        defineField ({
            name: 'password',
            type: 'string',
            hidden: true,
        }),
        defineField ({
            name: 'email',
            title: 'Email',
            type: 'string', 
        }),
        defineField ({
            name: 'emailVerified',
            type: 'datetime',
            hidden: true,
        }),
        defineField ({
            name: 'about',
            title: 'About',
            type: 'text',
            description: "A brief description about the user",
            readOnly: true,
        }),
    ],
};

export default user