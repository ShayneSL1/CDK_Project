#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkProjectStack } from '../lib/cdk_project-stack';
import { EC2Stack } from '../lib/ec2-stack';

const app = new cdk.App();
const vpcStack = new CdkProjectStack(app, 'CdkProjectStack', {

});

new EC2Stack(app, 'MyEC2Stack', {
  vpc: vpcStack.vpc
})

app.synth()