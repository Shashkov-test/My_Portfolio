export default {
    name: 'myWorks',
    title: 'MyWorks',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },

        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },

        {
            name: 'id',
            title: 'Id',
            type: 'number',
        },
    ]
}