import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';


/*
Constructs:
  scope- tells the bucket that the stack is its parent
  id- the id of the bucket within the AWS-CDK app it adds a hash based on the buckets location
  props- values that define the buckets properties (can be omitted if props are optional)

  NOTE: you can subclass any construct
*/
export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Bucket resource 
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
