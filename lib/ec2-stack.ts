import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2'

// Props

interface EC2StackProps extends cdk.StackProps {
    vpc: ec2.Vpc;
}

export class EC2Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: EC2StackProps) {
        super(scope, id, props);

        //EC2 Instance

        const instance1 = new ec2.Instance(this, "MyPrivateEC2-AZ1", {
            vpc: props.vpc,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
                availabilityZones: [props.vpc.availabilityZones[0]]
            },
            machineImage: ec2.MachineImage.latestAmazonLinux2(),
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO)
        })

        cdk.Tags.of(instance1).add('Name', 'MyPrivateEC2-AZ1')
    }
}