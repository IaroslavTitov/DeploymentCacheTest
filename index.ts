import * as pulumi from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";

const serviceOrg = "service-provider-test-org";
let config = new pulumi.Config();

const team = new service.Team("cool team", {
  organizationName: "yoba",
  teamType: "pulumi",
  name: "coolteam",
});
