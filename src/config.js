// const config = {
//   STRIPE_KEY: 'pk_test_51J2ffkSAf4QL6rEcAPKoec7Tv3ZElDAtFJS5aRcvkZSWqPMj3DiIWkDW693CPTMr0zy4xMxWtPVuXsRwU9zhf9EV00VXXhbVE4',
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: 'ap-south-1',
//     BUCKET: 'node-aws-uploads',
//   },
//   apiGateway: {
//     REGION: 'ap-south-1',
//     URL: 'https://78fr578sul.execute-api.ap-south-1.amazonaws.com/prod',
//   },
//   cognito: {
//     REGION: 'ap-south-1',
//     USER_POOL_ID: 'ap-south-1_y3z7C73Ce',
//     APP_CLIENT_ID: '7guug97jdmmd9tn8i0p7o69a2u',
//     IDENTITY_POOL_ID: 'ap-south-1:f825d4dc-7c60-4faa-928d-c8bba53f71ed',
//   },
// };
// export default config;

const dev = {
  STRIPE_KEY: 'pk_test_51J2ffkSAf4QL6rEcAPKoec7Tv3ZElDAtFJS5aRcvkZSWqPMj3DiIWkDW693CPTMr0zy4xMxWtPVuXsRwU9zhf9EV00VXXhbVE4',
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'dev-notes-infra-s3-uploads4f6eb0fd-1mh3l4risbcyh',
  },
  apiGateway: {
    REGION: 'ap-south-1',
    URL: 'https://8f0yo65i74.execute-api.ap-south-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_fKz7jqtk1',
    APP_CLIENT_ID: '49u9g1qf67mgmbgn57rcafneuk',
    IDENTITY_POOL_ID: 'ap-south-1:fa6d984b-f444-431c-b860-65f0c7675cc6',
  },
};
const prod = {
  STRIPE_KEY: 'pk_test_51J2ffkSAf4QL6rEcAPKoec7Tv3ZElDAtFJS5aRcvkZSWqPMj3DiIWkDW693CPTMr0zy4xMxWtPVuXsRwU9zhf9EV00VXXhbVE4',
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'prod-notes-infra-s3-uploads4f6eb0fd-2cuzgip8udql',
  },
  apiGateway: {
    REGION: 'ap-south-1',
    URL: 'https://78fr578sul.execute-api.ap-south-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_7Uc8Bcvo2',
    APP_CLIENT_ID: '4vf0n3a0ptp67ddoevv0uf48t8',
    IDENTITY_POOL_ID: 'ap-south-1:4b1daa6d-5027-4f32-b444-d896177835c9',
  },
};
const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === 'prod' ? prod : dev),
};
export default config;
