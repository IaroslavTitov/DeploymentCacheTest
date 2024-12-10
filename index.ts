import { Secret } from "@pulumi/aws/secretsmanager";
import * as pulumi from "@pulumi/pulumi";
import { Output } from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";

const serviceOrg = "yoba";
let config = new pulumi.Config();

const stack = new service.Stack("my_stack", {
  organizationName: serviceOrg,
  projectName: "my-test-project",
  stackName: "AgentPoolTest",
})

const pulumi_agent_pool = new service.AgentPool("agentPoolResource", {
  name: "agent-pool-resource",
  organizationName: serviceOrg,
  description: "this is to test agent pool id",
})