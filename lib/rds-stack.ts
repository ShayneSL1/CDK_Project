import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';


//Create an interface to accept the VPC from our VPC stack
interface RDSStackProps extends cdk.StackProps {
  vpc: ec2.Vpc;
}

//Create the RDS Stack Class

export class RDSStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RDSStackProps) {
    super(scope, id, props);
    
    // RDS configuration will go here

//     Use your VPC and place it in the isolated subnet



// Set up MySQL 8.0 as the database engine



// Use t3.micro for the instance type



// Configure storage settings



// Add appropriate tags
  }
}