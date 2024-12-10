import { Secret } from "@pulumi/aws/secretsmanager";
import * as pulumi from "@pulumi/pulumi";
import { Output } from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";

const serviceOrg = "boba";
let config = new pulumi.Config();

const stack = new service.Stack("my_stack", {
  organizationName: serviceOrg,
  projectName: "dummy",
  stackName: "dummy",
})