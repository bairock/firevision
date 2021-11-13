const { Generator } = require('@paljs/generator')
new Generator(
    { name: 'sdl', schemaPath: './prisma/schema.prisma' },
    {
        javaScript: true,
        output: './src/graphql/generated',
        excludeFieldsByModel: { 
            User: ["password"]
        }
    }
).run()