interface User {
  status: 'active' | 'deleted';
  age: number;
}

interface UserResponse {
  data: User[];
}

export const userResponse: UserResponse = {
  data: [
    {
      status: 'active',
      age: 14,
    },
    {
      status: 'deleted',
      age: 23,
    },
    {
      status: 'active',
      age: 16,
    },
    {
      status: 'active',
      age: 19,
    },
    {
      status: 'deleted',
      age: 33,
    },
  ],
};

export default userResponse;
export { User, UserResponse };
