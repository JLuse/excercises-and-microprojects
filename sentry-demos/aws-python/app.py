import os
import io
import boto3
import json

import sentry_sdk
from sentry_sdk.integrations.aws_lambda import AwsLambdaIntegration

region = 'us-east-1'

secrets_client = boto3.client("secretsmanager",region_name='us-east-1')

response = secrets_client.get_secret_value(SecretId='https://bcf805701f9cec6ad5b86341027f8f26@o565143.ingest.sentry.io/4506306008907776')
sentry_dsn = response["SecretString"]

sentry_sdk.init(
dsn=sentry_dsn,
integrations=[
AwsLambdaIntegration(),
],
)

def lambda_handler(event, context):
  print(f'sentry_dsn: {sentry_dsn}')
customer_name = event.get('customer_name')

# Retrieve parameters from Systems Manager Parameter Store
s3_bucket_name = ssm_client.get_parameter(Name=f'{customer_name}_bucket-name')['Parameter']['Value']