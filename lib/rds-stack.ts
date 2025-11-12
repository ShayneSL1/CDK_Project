import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { VpcSubnetGroupType } from 'aws-cdk-lib/cx-api';


//Create an interface to accept the VPC from our VPC stack
interface RDSStackProps extends cdk.StackProps {
  vpc: ec2.Vpc;
}

//Create the RDS Stack Class

export class RDSStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RDSStackProps) {
    super(scope, id, props);
    
    // RDS configuration will go here
    const MyRDSDatabase = new rds.DatabaseInstance(this, "MyRDSDatabase", {
      engine: rds.DatabaseInstanceEngine.MYSQL,
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        onePerAz: true,
        availabilityZones: [props.vpc.availabilityZones[0], props.vpc.availabilityZones[1]]
      },
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      allocatedStorage: 20,
      maxAllocatedStorage: 30,

    })
    cdk.Tags.of(MyRDSDatabase).add('Name','MyRDSDatabase-AZ1')
    cdk.Tags.of(MyRDSDatabase).add('Name','MyRDSDatabase-AZ2')
  }
}