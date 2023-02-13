import S3 from "aws-sdk/clients/s3";

export default function (Key: string): string {
  const s3 = new S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_DEFAULT_REGION,
  });

  const url = s3.getSignedUrl("getObject", {
    Bucket: "stnkworkshop-images",
    Key,
    Expires: 3,
  });
  return url;
}
