import {GraphQLDefinitionsFactory} from "@nestjs/graphql";
import {join} from "path";

const definitionFactory = new GraphQLDefinitionsFactory()
definitionFactory.generate({
    typePaths: ['./src/graph-ql/gql-schemas/*.gql'],
    path: join(process.cwd(), 'src/graph-ql/schemas/schemas.ts'),
    outputAs: 'class',
})