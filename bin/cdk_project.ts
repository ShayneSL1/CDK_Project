#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkProjectStack } from '../lib/cdk_project-stack';
import { EC2Stack } from '../lib/ec2-stack';
import { RDSStack } from '../lib/rds-stack';

const app = new cdk.App();
const vpcStack = new CdkProjectStack(app, 'CdkProjectStack', {

});

new EC2Stack(app, 'MyEC2Stack', {
  vpc: vpcStack.vpc
})

new RDSStack(app, 'MyRdsStack', {
  vpc: vpcStack.vpc
})

app.synth()