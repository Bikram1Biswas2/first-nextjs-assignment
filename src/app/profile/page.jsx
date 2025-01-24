import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {

  const { getUser } = getKindeServerSession();
  const user = await getUser();


  if (!user) {
    redirect('/api/auth/login');
  }

 
  return (
    <div className="w-11/12 mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold">Welcome to your profile!</h2>
      <p className="mt-4 text-lg text-gray-600">
        You are now logged in as <span className="font-semibold">{user.email || user.name}</span>.
      </p>
    </div>
  );
};

export default Profile;
