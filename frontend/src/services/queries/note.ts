import {gql} from "@apollo/client";

export const FIND_ALL_NOTES = gql`
    query findAll($page: Int) {
        findAll(page: $page) {
            id,
            name,
            context,
            publishDate
        }
    }
`;
