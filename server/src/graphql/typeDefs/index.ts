import projectTypedefs from "./project";
import clientTypeDefs from "./client";
import registerTypeDefs from "./register";

const typeDefs = `
    ${projectTypedefs}
    ${clientTypeDefs}
    ${registerTypeDefs}
`;

export default typeDefs;
