import User from '../../lib/database/models/user'

const createUser = async ({
  email,
  firebaseUserId,
  displayName,
  firstName,
  lastName,
}: {
  email: string
  firebaseUserId: string
  displayName: string
  firstName: string
  lastName: string
}) => {
  // await User.query().insert({
  //   email,
  //   firstName,
  //   lastName,
  //   displayName,
  //   firebaseUserId,
  // })
}
