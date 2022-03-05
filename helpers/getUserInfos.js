const getUserInfos = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const result = await response.json();

  return {
    user: result.login,
    imageUrl: result.avatar_url,
  }
};

export default getUserInfos;