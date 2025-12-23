import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://ulsboldulsbold921_db_user:UOKuX3GpWQIyRAKl@cluster0.isgczfh.mongodb.net/?appName=Cluster0"
  );
};
