import {
  UpdateUserProps,
  updateUser
} from "@/api/requests";

const UsersService = {
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
  updateUser: ({ userId, name, email, avatarUrl }: UpdateUserProps) =>
    updateUser({ userId, name, email, avatarUrl }),
};

export default UsersService;
