import * as pulumi from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";
import { WebhookGroup, WebhookFormat, WebhookFilters } from "@pulumi/pulumiservice";

const serviceOrg = "service-provider-test-org";
let config = new pulumi.Config();

// Organization webhook only subscribed to environments and stacks groups
const webhook = new service.Webhook("org-webhook-groups", {
  active: true,
  displayName: "webhook-from-provider",
  organizationName: "yoba",
  payloadUrl: "https://google.com",
  groups: [ WebhookGroup.Environments, WebhookGroup.Stacks ]
});
