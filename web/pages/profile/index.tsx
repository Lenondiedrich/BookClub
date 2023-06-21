import AuthRoute from "@/components/Auth/AuthRoute";
import ProfileScreen from "@/components/ProfileScreen/ProfileScreen";

export default function Profile() {
  return (
    <AuthRoute>
      <ProfileScreen />
    </AuthRoute>
  );
}
