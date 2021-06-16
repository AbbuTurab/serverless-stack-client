const config = {
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'node-aws-uploads',
  },
  apiGateway: {
    REGION: 'ap-south-1',
    URL: 'https://78fr578sul.execute-api.ap-south-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_y3z7C73Ce',
    APP_CLIENT_ID: '7guug97jdmmd9tn8i0p7o69a2u',
    IDENTITY_POOL_ID: 'ap-south-1:f825d4dc-7c60-4faa-928d-c8bba53f71ed',
  },
};
export default config;
