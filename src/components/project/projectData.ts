import { aiProjects } from "./data/aiProjects";
import { webProjects } from "./data/webProjects";
import { technicalProjects } from "./data/technicalProjects";
import { blockchainProjects } from "./data/blockchainProjects";
import { platformProjects } from "./data/platformProjects";
import { securityProjects } from "./data/securityProjects";

export const projects = [
  ...webProjects,
  ...aiProjects,
  ...technicalProjects,
  ...blockchainProjects,
  ...platformProjects,
  ...securityProjects,
];